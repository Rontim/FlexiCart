import 'package:flexi_cart_mobile/utils/constants/image_strings.dart';
import 'package:flexi_cart_mobile/utils/constants/sizes.dart';
import 'package:flexi_cart_mobile/utils/constants/text_strings.dart';
import 'package:flutter/material.dart';

class LoginScreenHeader extends StatelessWidget {
  const LoginScreenHeader({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Image(
          height: 150,
          image: AssetImage(FImages.appFavicon),
        ),
        Text(FTexts.loginTitle, style: Theme.of(context).textTheme.headlineMedium),
        const SizedBox(height: FSizes.sm),
        Text(FTexts.loginSubTitle, style: Theme.of(context).textTheme.bodyMedium)
      ],
    );
  }
}
