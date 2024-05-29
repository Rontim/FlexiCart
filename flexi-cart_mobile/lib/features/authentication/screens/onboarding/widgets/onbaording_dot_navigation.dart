import 'package:flexi_cart_mobile/features/authentication/contollers/onboarding/onboarding_controller.dart';
import 'package:flexi_cart_mobile/utils/constants/colors.dart';
import 'package:flexi_cart_mobile/utils/constants/sizes.dart';
import 'package:flexi_cart_mobile/utils/device/device_utility.dart';
import 'package:flexi_cart_mobile/utils/helpers/helper_functions.dart';
import 'package:flexi_cart_mobile/utils/logging/logger.dart';
import 'package:flutter/material.dart';
import 'package:smooth_page_indicator/smooth_page_indicator.dart';

class OnBoardingDotNavigation extends StatelessWidget {
  const OnBoardingDotNavigation({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final controller = OnboardingController.instance;

    return Positioned(
      bottom: FDeviceUtils.getBottomNavigationBarHeight() + FSizes.defaultSpace,
      left: FSizes.defaultSpace,
      child: SmoothPageIndicator(
        controller: controller.pageController,
        onDotClicked: controller.dotNavigationClick,
        count: 3,
        effect: ExpandingDotsEffect(
            activeDotColor: isDark ? FColors.light : FColors.dark, dotHeight: 6),
      ),
    );
  }
}
