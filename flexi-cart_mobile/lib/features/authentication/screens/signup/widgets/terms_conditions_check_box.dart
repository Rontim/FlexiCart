import 'package:flexi_cart_mobile/utils/constants/colors.dart';
import 'package:flexi_cart_mobile/utils/constants/sizes.dart';
import 'package:flexi_cart_mobile/utils/constants/text_strings.dart';
import 'package:flexi_cart_mobile/utils/helpers/helper_functions.dart';
import 'package:flutter/material.dart';

class FTermsConditionsCheckBox extends StatelessWidget {
  const FTermsConditionsCheckBox({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    final dark = FHelperFunctions.isDarkMode(context);

    return Row(
      children: [
        SizedBox(
          width: 24,
          height: 24,
          child: Checkbox(value: true, onChanged: (value) {}),
        ),
        const SizedBox(width: FSizes.spaceBtwItems / 2),
        Text.rich(
          TextSpan(
            children: [
              TextSpan(
                text: '${FTexts.iAgreeTo} ',
                style: Theme.of(context).textTheme.bodySmall,
              ),
              TextSpan(
                text: FTexts.privacyPolicy,
                style: Theme.of(context).textTheme.bodyMedium!.apply(
                      decoration: TextDecoration.underline,
                      color: dark ? FColors.white : FColors.primary,
                      decorationColor: dark ? FColors.white : FColors.primary,
                    ),
              ),
              TextSpan(
                text: ' ${FTexts.and} ',
                style: Theme.of(context).textTheme.bodySmall,
              ),
              TextSpan(
                text: FTexts.termsOfUse,
                style: Theme.of(context).textTheme.bodyMedium!.apply(
                      decoration: TextDecoration.underline,
                      color: dark ? FColors.white : FColors.primary,
                      decorationColor: dark ? FColors.white : FColors.primary,
                    ),
              ),
            ],
          ),
        )
      ],
    );
  }
}
