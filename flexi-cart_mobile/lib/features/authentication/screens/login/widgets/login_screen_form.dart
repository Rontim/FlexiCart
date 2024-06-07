import 'package:flexi_cart_mobile/bottom_navigation_menu.dart';
import 'package:flexi_cart_mobile/features/authentication/screens/password/forget_password_screen.dart';
import 'package:flexi_cart_mobile/features/authentication/screens/signup/signup.dart';
import 'package:flexi_cart_mobile/utils/constants/sizes.dart';
import 'package:flexi_cart_mobile/utils/constants/text_strings.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:iconsax/iconsax.dart';

class LoginScreenForm extends StatelessWidget {
  const LoginScreenForm({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Form(
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: FSizes.spaceBtwSections),
        child: Column(
          children: [
            TextFormField(
              decoration: const InputDecoration(
                prefixIcon: Icon(Iconsax.direct_right),
                label: Text(FTexts.email),
              ),
            ),
            const SizedBox(height: FSizes.spaceBtwInputFields),
            TextFormField(
              decoration: const InputDecoration(
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
                TextButton(
                  onPressed: () => Get.to(
                    () => const ForgetPasswordScreen(),
                    transition: Transition.leftToRightWithFade,
                  ),
                  child: const Text(FTexts.forgetPassword),
                ),
              ],
            ),
            const SizedBox(height: FSizes.spaceBtwSections),

            // Sign in Button
            SizedBox(
              width: double.infinity,
              child: ElevatedButton(
                onPressed: () =>
                    Get.offAll(() => const BottomNavigationMenu(), transition: Transition.fadeIn),
                child: const Text(FTexts.signIn),
              ),
            ),
            const SizedBox(height: FSizes.spaceBtwItems),

            // Sign up Button
            SizedBox(
              width: double.infinity,
              child: OutlinedButton(
                onPressed: () => Get.to(() => const SignUpScreen()),
                child: const Text(FTexts.createAccount),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
