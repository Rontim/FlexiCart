import 'package:flexi_cart_mobile/utils/constants/colors.dart';
import 'package:flexi_cart_mobile/utils/constants/image_strings.dart';
import 'package:flexi_cart_mobile/utils/constants/sizes.dart';
import 'package:flutter/material.dart';

class FSocialButtons extends StatelessWidget {
  const FSocialButtons({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Container(
          decoration: BoxDecoration(
            border: Border.all(color: FColors.grey),
            borderRadius: BorderRadius.circular(100),
          ),
          child: IconButton(
            onPressed: () {},
            icon: const Image(
              width: FSizes.iconMd,
              height: FSizes.iconMd,
              image: AssetImage(FImages.google),
            ),
          ),
        ),
        const SizedBox(width: FSizes.spaceBtwItems),
        Container(
          decoration: BoxDecoration(
            border: Border.all(color: FColors.grey),
            borderRadius: BorderRadius.circular(100),
          ),
          child: IconButton(
            onPressed: () {},
            icon: const Image(
              width: FSizes.iconMd,
              height: FSizes.iconMd,
              image: AssetImage(FImages.facebook),
            ),
          ),
        )
      ],
    );
  }
}
