import 'package:flexi_cart_mobile/common/styles/spacing_styles.dart';
import 'package:flexi_cart_mobile/common/widgets/login_and_signup/form_divider.dart';
import 'package:flexi_cart_mobile/common/widgets/login_and_signup/social_buttons.dart';
import 'package:flexi_cart_mobile/features/authentication/screens/signup/widgets/sign_up_screen_form.dart';
import 'package:flexi_cart_mobile/utils/constants/sizes.dart';
import 'package:flexi_cart_mobile/utils/constants/text_strings.dart';
import 'package:flutter/material.dart';

class SignUpScreen extends StatelessWidget {
  const SignUpScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final dark = Theme.of(context).brightness == Brightness.dark;

    return Scaffold(
      body: SingleChildScrollView(
        child: Padding(
          padding: FSpacingStyles.paddingWithAppBarHeight,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Title
              Text(FTexts.signupTitle, style: Theme.of(context).textTheme.headlineMedium),
              const SizedBox(height: FSizes.spaceBtwSections),

              // Form
              const SignUpScreenForm(),
              const SizedBox(height: FSizes.spaceBtwSections),

              // Divider
              FFormDivider(dark: dark, dividerText: FTexts.orSignUpWith),
              const SizedBox(height: FSizes.spaceBtwItems),

              // Social Login
              const FSocialButtons()
            ],
          ),
        ),
      ),
    );
  }
}
