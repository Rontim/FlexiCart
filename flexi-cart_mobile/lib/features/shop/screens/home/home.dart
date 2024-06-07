import 'package:flexi_cart_mobile/common/widgets/custom_shapes/containers/primary_header_container.dart';
import 'package:flexi_cart_mobile/features/shop/screens/home/widgets/f_home_app_bar.dart';
import 'package:flexi_cart_mobile/utils/constants/colors.dart';
import 'package:flexi_cart_mobile/utils/constants/sizes.dart';
import 'package:flexi_cart_mobile/utils/device/device_utility.dart';
import 'package:flexi_cart_mobile/utils/helpers/helper_functions.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:iconsax/iconsax.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: SingleChildScrollView(
        child: Column(
          children: [
            FPrimaryHeaderContainer(
              child: Column(
                children: [
                  // App Bar
                  FHomeAppBar(),
                  SizedBox(height: FSizes.spaceBtwSections),

                  // Search Bar
                  FSearchContainer(text: 'Search for Products'),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class FSearchContainer extends StatelessWidget {
  const FSearchContainer({
    super.key,
    required this.text,
    this.icon = Iconsax.search_normal,
    this.showBackground = true,
    this.showBorder = true,
  });

  final String text;
  final IconData? icon;
  final bool showBackground, showBorder;

  @override
  Widget build(BuildContext context) {
    final dark = FHelperFunctions.isDarkMode(context);

    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: FSizes.spaceBtwSections),
      child: Container(
        width: FDeviceUtils.getScreenWidth(context),
        padding: const EdgeInsets.all(FSizes.md),
        decoration: BoxDecoration(
          color: showBackground ? (dark ? FColors.dark : FColors.light) : Colors.transparent,
          borderRadius: BorderRadius.circular(FSizes.cardRadiusLg),
          border: showBorder ? Border.all(color: FColors.grey) : null,
        ),
        child: Row(
          children: [
            Icon(icon, color: FColors.darkGrey),
            const SizedBox(width: FSizes.sm),
            Text(text, style: Theme.of(context).textTheme.bodySmall)
          ],
        ),
      ),
    );
  }
}
