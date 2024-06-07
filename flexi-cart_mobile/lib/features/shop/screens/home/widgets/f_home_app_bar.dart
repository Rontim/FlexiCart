import 'package:flexi_cart_mobile/common/widgets/appbar/appbar.dart';
import 'package:flexi_cart_mobile/common/widgets/products/cart/cart_menu_icon.dart';
import 'package:flexi_cart_mobile/utils/constants/colors.dart';
import 'package:flexi_cart_mobile/utils/constants/text_strings.dart';
import 'package:flutter/material.dart';

class FHomeAppBar extends StatelessWidget {
  const FHomeAppBar({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return FAppBar(
      title: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            FTexts.homeAppbarTitle,
            style: Theme.of(context).textTheme.labelMedium!.apply(color: FColors.grey),
          ),
          Text(
            FTexts.homeAppbarSubTitle,
            style: Theme.of(context).textTheme.headlineMedium!.apply(color: FColors.white),
          ),
        ],
      ),
      actions: [
        FCardCounterIcon(iconColor: FColors.white, onPressed: () {}),
      ],
    );
  }
}
