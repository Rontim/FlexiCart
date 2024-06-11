import 'package:flexi_cart_mobile/common/styles/shadows.dart';
import 'package:flexi_cart_mobile/common/widgets/custom_shapes/containers/rounded_containers.dart';
import 'package:flexi_cart_mobile/common/widgets/image/rounded_image.dart';
import 'package:flexi_cart_mobile/utils/constants/colors.dart';
import 'package:flexi_cart_mobile/utils/constants/image_strings.dart';
import 'package:flexi_cart_mobile/utils/constants/sizes.dart';
import 'package:flutter/material.dart';

class FVerticalProductCard extends StatelessWidget {
  const FVerticalProductCard({super.key});

  @override
  Widget build(BuildContext context) {
    final dark = Theme.of(context).brightness == Brightness.dark;
    return Container(
      width: 180,
      padding: const EdgeInsets.all(1),
      decoration: BoxDecoration(
        color: dark ? FColors.darkGrey : FColors.white,
        boxShadow: [FShadows.verticalProductShadow],
        borderRadius: BorderRadius.circular(FSizes.productImageRadius),
      ),
      child: Column(
        children: [
          FRoundedContainer(
            height: 180,
            padding: const EdgeInsets.all(FSizes.sm),
            backgroundColor: dark ? FColors.dark : FColors.light,
            child: const Stack(
              children: [
                FRoundedImage(
                  imageUrl: FImages.promoBanner2,
                  applyImageRadius: true,
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
