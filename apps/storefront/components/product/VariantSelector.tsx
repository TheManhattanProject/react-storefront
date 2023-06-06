import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./ProductGallery.module.css";
import { usePaths } from "@/lib/paths";
import { translate } from "@/lib/translations";
import { ProductDetailsFragment } from "@/saleor/api";

import { useRegions } from "../RegionsProvider";

export interface VariantSelectorProps {
  product: ProductDetailsFragment;
  selectedVariantID?: string;
}

export function VariantSelector({ product, selectedVariantID }: VariantSelectorProps) {
  const paths = usePaths();
  const router = useRouter();
  const { formatPrice } = useRegions();

  const [selectedVariant, setSelectedVariant] = useState(selectedVariantID);

  const { variants } = product;

  // Skip displaying selector when theres less than 2 variants
  if (!variants || variants.length === 1) {
    return null;
  }

  const onChange = (value: string) => {
    setSelectedVariant(value);
    void router.replace(
      paths.products._slug(product.slug).$url({ ...(value && { query: { variant: value } }) }),
      undefined,
      {
        shallow: true,
        scroll: false,
      }
    );
  };

  return (
    <div className="w-full" style={{ display: "flex" }}>
      <div className={styles.sizeOuter}>
        <div className={styles.size}>Choose A Size</div>
        <div className={styles.sizeChart}>Size Chart</div>
      </div>
      <RadioGroup value={selectedVariant} onChange={onChange}>
        <div
          className="space-y-4"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          {variants.map((variant) => (
            <RadioGroup.Option
              key={variant.id}
              value={variant.id}
              className={({ checked }) =>
                clsx("bg-main w-full", checked && "bg-brand", !checked && "")
              }
            >
              {({ checked }) => (
                <div
                  className={clsx(
                    "bg-white w-full h-full relative cursor-pointer object-contain",
                    checked && "underline decoration-blue-700 underline-offset-8",
                    !checked &&
                      "no-underline hover:underline decoration-blue-700 underline-offset-8"
                  )}
                >
                  <RadioGroup.Label as="div" className="w-full justify-between p-4">
                    <div className="flex flex-row gap-2 w-full font-semibold text-md">
                      <div
                        className="grow"
                        style={{ textAlign: "center", fontFamily: "Avenir Next" }}
                        data-testid={`variantOf${variant.name}`}
                      >
                        {translate(variant, "name")}
                      </div>
                      {/* <div>{formatPrice(variant.pricing?.price?.gross)}</div> */}
                    </div>
                  </RadioGroup.Label>
                </div>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}

export default VariantSelector;
