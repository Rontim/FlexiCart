import 'package:flexi_cart_mobile/common/widgets/success_screen/success_screen.dart';
import 'package:flexi_cart_mobile/features/authentication/screens/login/login.dart';
import 'package:flexi_cart_mobile/utils/constants/image_strings.dart';
import 'package:flexi_cart_mobile/utils/constants/sizes.dart';
import 'package:flexi_cart_mobile/utils/constants/text_strings.dart';
import 'package:flexi_cart_mobile/utils/helpers/helper_functions.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class VerifyEmailScreen extends StatelessWidget {
  const VerifyEmailScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        automaticallyImplyLeading: false,
        actions: [
          // Close Button
          IconButton(
            onPressed: () => Get.offAll(() => const LoginScreen()),
            icon: const Icon(CupertinoIcons.clear),
          )
        ],
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(FSizes.defaultSpace),
          child: Column(
            children: [
              // Image
              Image(
                image: const AssetImage(FImages.deliveredEmailIllustration),
                width: FHelperFunctions.screenWidth() * 0.6,
              ),
              const SizedBox(height: FSizes.spaceBtwSections),

              // Title & Subtitle
              Text(FTexts.confirmEmail,
                  style: Theme.of(context).textTheme.headlineMedium, textAlign: TextAlign.center),
              const SizedBox(height: FSizes.spaceBtwItems),
              Text(
                'admin@flexicart.com',
                style: Theme.of(context).textTheme.labelLarge,
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: FSizes.spaceBtwItems),
              Text(
                FTexts.confirmEmailSubTitle,
                style: Theme.of(context).textTheme.labelMedium,
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: FSizes.spaceBtwSections),

              // Buttons
              SizedBox(
                width: double.infinity,
                child: ElevatedButton(
                  onPressed: () => Get.to(() => SuccessScreen(
                        image: FImages.staticSuccessIllustration,
                        title: FTexts.yourAccountCreatedTitle,
                        subTitle: FTexts.yourAccountCreatedSubTitle,
                        onPressed: () => Get.offAll(() => const LoginScreen()),
                      )),
                  child: const Text(FTexts.fContinue),
                ),
              ),
              const SizedBox(height: FSizes.spaceBtwItems),
              SizedBox(
                width: double.infinity,
                child: TextButton(
                  onPressed: () {},
                  child: const Text(FTexts.resendEmail),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
