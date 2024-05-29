import 'package:flexi_cart_mobile/features/authentication/controllers/onboarding_controller.dart';
import 'package:flexi_cart_mobile/features/authentication/screens/onboarding/widgets/onbaording_dot_navigation.dart';
import 'package:flexi_cart_mobile/features/authentication/screens/onboarding/widgets/onbaording_pages.dart';
import 'package:flexi_cart_mobile/features/authentication/screens/onboarding/widgets/onboarding_next_button.dart';
import 'package:flexi_cart_mobile/features/authentication/screens/onboarding/widgets/onboarding_skip.dart';
import 'package:flexi_cart_mobile/utils/constants/image_strings.dart';
import 'package:flexi_cart_mobile/utils/constants/text_strings.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class OnboardingScreen extends StatelessWidget {
  const OnboardingScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final controller = Get.put(OnboardingController());

    return Scaffold(
      body: Stack(
        children: [
          PageView(
            controller: controller.pageController,
            onPageChanged: controller.updatePageIndicator,
            children: const [
              OnBoardingPage(
                image: FImages.onBoardingImage1,
                title: FTexts.onBoardingTitle1,
                subtitle: FTexts.onBoardingSubTitle1,
              ),
              OnBoardingPage(
                image: FImages.onBoardingImage2,
                title: FTexts.onBoardingTitle2,
                subtitle: FTexts.onBoardingSubTitle2,
              ),
              OnBoardingPage(
                image: FImages.onBoardingImage3,
                title: FTexts.onBoardingTitle3,
                subtitle: FTexts.onBoardingSubTitle3,
              ),
            ],
          ),
          const OnBoardingSkip(),
          const OnBoardingDotNavigation(),
          const OnBoardingNextButton()
        ],
      ),
    );
  }
}
