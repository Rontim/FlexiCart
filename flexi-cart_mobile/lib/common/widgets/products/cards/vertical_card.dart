import 'package:flexi_cart_mobile/common/styles/shadows.dart';
import 'package:flexi_cart_mobile/common/widgets/custom_shapes/containers/rounded_containers.dart';
import 'package:flexi_cart_mobile/common/widgets/icons/circular_icon_container.dart';
import 'package:flexi_cart_mobile/common/widgets/image/rounded_image.dart';
import 'package:flexi_cart_mobile/utils/constants/colors.dart';
import 'package:flexi_cart_mobile/utils/constants/image_strings.dart';
import 'package:flexi_cart_mobile/utils/constants/sizes.dart';
import 'package:flutter/material.dart';
import 'package:iconsax/iconsax.dart';

class FVerticalProductCard extends StatelessWidget {
  const FVerticalProductCard({super.key});

  @override
  Widget build(BuildContext context) {
    final dark = Theme.of(context).brightness == Brightness.dark;
    return Container(
      width: 200,
      padding: const EdgeInsets.all(1),
      decoration: BoxDecoration(
        color: dark ? FColors.darkGrey : FColors.white,
        boxShadow: [FShadows.verticalProductShadow],
        borderRadius: BorderRadius.circular(FSizes.productImageRadius),
      ),
      child: Column(
        children: [
          FRoundedContainer(
            height: 200,
            padding: const EdgeInsets.all(FSizes.sm),
            backgroundColor: dark ? FColors.dark : FColors.light,
            child: Stack(
              children: [
                const FRoundedImage(
                  imageUrl: FImages.productImage1,
                  applyImageRadius: true,
                ),
                Positioned(
                  top: 12,
                  child: FRoundedContainer(
                    radius: FSizes.sm,
                    backgroundColor: FColors.secondary.withOpacity(0.8),
                    padding: const EdgeInsets.symmetric(
                      horizontal: FSizes.sm,
                      vertical: FSizes.xs,
                    ),
                    child: Text(
                      '35%',
                      style: Theme.of(context)
                          .textTheme
                          .labelLarge!
                          .apply(color: FColors.black),
                    ),
                  ),
                ),
                const Positioned(
                  top: 0,
                  right: 0,
                  child: FCircularIcon(icon: Iconsax.heart5, color: Colors.red),
                )
              ],
            ),
          ),
        ],
      ),
    );
  }
}
