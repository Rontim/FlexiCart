import 'package:flexi_cart_mobile/features/authentication/screens/signup/verify_email.dart';
import 'package:flexi_cart_mobile/features/authentication/screens/signup/widgets/terms_conditions_check_box.dart';
import 'package:flexi_cart_mobile/utils/constants/sizes.dart';
import 'package:flexi_cart_mobile/utils/constants/text_strings.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:iconsax/iconsax.dart';

class SignUpScreenForm extends StatelessWidget {
  const SignUpScreenForm({super.key});

  @override
  Widget build(BuildContext context) {
    return Form(
      child: Column(
        children: [
          // Full Name
          Row(
            children: [
              Expanded(
                child: TextFormField(
                  expands: false,
                  decoration: const InputDecoration(
                      prefixIcon: Icon(Iconsax.user), label: Text(FTexts.firstName)),
                ),
              ),
              const SizedBox(width: FSizes.spaceBtwInputFields),
              Expanded(
                child: TextFormField(
                  expands: false,
                  decoration: const InputDecoration(
                    prefixIcon: Icon(Iconsax.user),
                    label: Text(FTexts.lastName),
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: FSizes.spaceBtwInputFields),

          // Username
          TextFormField(
            expands: false,
            decoration: const InputDecoration(
              prefixIcon: Icon(Iconsax.user),
              label: Text(FTexts.username),
            ),
          ),
          const SizedBox(height: FSizes.spaceBtwInputFields),

          // Email
          TextFormField(
            decoration: const InputDecoration(
              prefixIcon: Icon(Iconsax.direct),
              label: Text(FTexts.email),
            ),
          ),
          const SizedBox(height: FSizes.spaceBtwInputFields),

          // Phone Number
          TextFormField(
            decoration: const InputDecoration(
              prefixIcon: Icon(Iconsax.call),
              label: Text(FTexts.phoneNo),
            ),
          ),
          const SizedBox(height: FSizes.spaceBtwInputFields),

          // Password
          TextFormField(
            obscureText: true,
            decoration: const InputDecoration(
              prefixIcon: Icon(Iconsax.password_check),
              label: Text(FTexts.password),
              suffixIcon: Icon(Iconsax.eye_slash),
            ),
          ),

          const SizedBox(height: FSizes.spaceBtwSections),

          // Terms and Conditions
          const FTermsConditionsCheckBox(),
          const SizedBox(height: FSizes.spaceBtwSections),

          // Action button ( Sign Up )
          SizedBox(
            width: double.infinity,
            child: ElevatedButton(
              onPressed: () => Get.to(() => const VerifyEmailScreen()),
              child: const Text(FTexts.createAccount),
            ),
          ),
        ],
      ),
    );
  }
}
