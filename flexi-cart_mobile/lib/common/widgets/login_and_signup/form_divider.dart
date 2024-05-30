import 'package:flexi_cart_mobile/utils/constants/colors.dart';
import 'package:flutter/material.dart';

class FFormDivider extends StatelessWidget {
  const FFormDivider({
    super.key,
    required this.dark,
    required this.dividerText,
  });

  final bool dark;
  final String dividerText;

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Flexible(
          child: Divider(
            color: dark ? FColors.darkGrey : FColors.grey,
            thickness: 0.5,
            indent: 60,
            endIndent: 5,
          ),
        ),
        Text(dividerText, style: Theme.of(context).textTheme.labelMedium),
        Flexible(
          child: Divider(
            color: dark ? FColors.darkGrey : FColors.grey,
            thickness: 0.5,
            indent: 5,
            endIndent: 68,
          ),
        ),
      ],
    );
  }
}
