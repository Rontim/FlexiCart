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
          const SizedBox(height: FSizes.spaceBtwItems / 2),
          Padding(
            padding: const EdgeInsets.only(left: FSizes.sm),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const FProductTitle(
                    title: 'Green Nike Air Shues', smallSize: true),
                const SizedBox(height: FSizes.spaceBtwItems / 2),
                Row(
                  children: [
                    Text(
                      'Nike',
                      style: Theme.of(context).textTheme.labelMedium,
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                    ),
                    const SizedBox(width: FSizes.xs),
                    const Icon(
                      Iconsax.verify5,
                      color: FColors.primary,
                      size: FSizes.iconXs,
                    )
                  ],
                ),
              ],
            ),
          )
        ],
      ),
    );
  }
}

class FProductTitle extends StatelessWidget {
  const FProductTitle({
    super.key,
    this.maxLines = 2,
    required this.title,
    this.smallSize = false,
    this.textAlign = TextAlign.left,
  });

  final String title;
  final bool smallSize;
  final int maxLines;
  final TextAlign? textAlign;

  @override
  Widget build(BuildContext context) {
    return Text(
      title,
      maxLines: maxLines,
      textAlign: textAlign,
      overflow: TextOverflow.ellipsis,
      style: smallSize
          ? Theme.of(context).textTheme.labelLarge
          : Theme.of(context).textTheme.titleSmall,
    );
  }
}
