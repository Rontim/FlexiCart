import 'package:flexi_cart_mobile/common/styles/spacing_styles.dart';
import 'package:flexi_cart_mobile/utils/constants/colors.dart';
import 'package:flexi_cart_mobile/utils/constants/image_strings.dart';
import 'package:flexi_cart_mobile/utils/constants/sizes.dart';
import 'package:flexi_cart_mobile/utils/constants/text_strings.dart';
import 'package:flutter/material.dart';
import 'package:iconsax/iconsax.dart';

class LoginScreen extends StatelessWidget {
  const LoginScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final dark = Theme.of(context).brightness == Brightness.dark;

    return Scaffold(
      body: SingleChildScrollView(
        child: Padding(
          padding: FSpacingStyles.paddingWithAppBarHeight,
          child: Column(
            children: [
              // Logo, Title & Subtitle
              Column(
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
              ),

              // Form
              Form(
                child: Padding(
                  padding: const EdgeInsets.symmetric(vertical: FSizes.spaceBtwSections),
                  child: Column(
                    children: [
                      const TextField(
                        decoration: InputDecoration(
                          prefixIcon: Icon(Iconsax.direct_right),
                          label: Text(FTexts.email),
                        ),
                      ),
                      const SizedBox(height: FSizes.spaceBtwInputFields),
                      const TextField(
                        decoration: InputDecoration(
                          prefixIcon: Icon(Iconsax.password_check),
                          label: Text(FTexts.password),
                          suffixIcon: Icon(Iconsax.eye_slash),
                        ),
                      ),
                      const SizedBox(height: FSizes.spaceBtwInputFields / 2),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Row(
                            children: [
                              Checkbox(value: true, onChanged: (value) {}),
                              const Text(FTexts.rememberMe),
                            ],
                          ),
                          TextButton(onPressed: () {}, child: const Text(FTexts.forgetPassword)),
                        ],
                      ),
                      const SizedBox(height: FSizes.spaceBtwSections),

                      // Sign in Button
                      SizedBox(
                        width: double.infinity,
                        child: ElevatedButton(onPressed: () {}, child: const Text(FTexts.signIn)),
                      ),
                      const SizedBox(height: FSizes.spaceBtwItems),

                      // Sign up Button
                      SizedBox(
                        width: double.infinity,
                        child: OutlinedButton(
                          onPressed: () {},
                          child: const Text(FTexts.createAccount),
                        ),
                      ),
                    ],
                  ),
                ),
              ),

              // Divider
              Row(
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
                  Text(FTexts.orSignInWith, style: Theme.of(context).textTheme.labelMedium),
                  Flexible(
                    child: Divider(
                      color: dark ? FColors.darkGrey : FColors.grey,
                      thickness: 0.5,
                      indent: 5,
                      endIndent: 68,
                    ),
                  ),
                ],
              ),
              const SizedBox(height: FSizes.spaceBtwItems),
              // Social Login
              Row(
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
              )
            ],
          ),
        ),
      ),
    );
  }
}
