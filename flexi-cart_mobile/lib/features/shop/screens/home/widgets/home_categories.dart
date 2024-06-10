import 'package:flexi_cart_mobile/common/widgets/image_text/vertical_image_text.dart';
import 'package:flexi_cart_mobile/utils/constants/image_strings.dart';
import 'package:flutter/material.dart';

class FHomeCategories extends StatelessWidget {
  const FHomeCategories({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 100,
      child: ListView.builder(
        itemCount: 6,
        shrinkWrap: true,
        scrollDirection: Axis.horizontal,
        itemBuilder: (context, index) {
          return FVerticalImageText(
            image: FImages.sportIcon,
            title: 'Sports',
            onTap: () {},
          );
        },
      ),
    );
  }
}
