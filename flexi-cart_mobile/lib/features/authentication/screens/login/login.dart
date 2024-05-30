import 'package:flexi_cart_mobile/common/styles/spacing_styles.dart';
import 'package:flexi_cart_mobile/common/widgets/login_and_signup/form_divider.dart';
import 'package:flexi_cart_mobile/common/widgets/login_and_signup/social_buttons.dart';
import 'package:flexi_cart_mobile/features/authentication/screens/login/widgets/login_screen_form.dart';
import 'package:flexi_cart_mobile/features/authentication/screens/login/widgets/login_screen_header.dart';
import 'package:flexi_cart_mobile/utils/constants/sizes.dart';
import 'package:flexi_cart_mobile/utils/constants/text_strings.dart';
import 'package:flutter/material.dart';

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
              const LoginScreenHeader(),

              // Form
              const LoginScreenForm(),

              // Divider
              FFormDivider(dark: dark, dividerText: FTexts.orSignInWith),
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
