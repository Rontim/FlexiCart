import 'package:carousel_slider/carousel_slider.dart';
import 'package:flexi_cart_mobile/common/widgets/custom_shapes/containers/circular_containers.dart';
import 'package:flexi_cart_mobile/common/widgets/image/rounded_image.dart';
import 'package:flexi_cart_mobile/features/shop/controllers/home_controller.dart';
import 'package:flexi_cart_mobile/utils/constants/colors.dart';
import 'package:flexi_cart_mobile/utils/constants/sizes.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class FHomePromoSlider extends StatelessWidget {
  const FHomePromoSlider({
    super.key,
    required this.banners,
  });

  final List<String> banners;

  @override
  Widget build(BuildContext context) {
    final controller = Get.put(HomeController());
    return Column(
      children: [
        CarouselSlider(
          options: CarouselOptions(
              viewportFraction: 1.1,
              autoPlay: true,
              autoPlayInterval: const Duration(seconds: 5),
              autoPlayAnimationDuration: const Duration(milliseconds: 800),
              autoPlayCurve: Curves.fastOutSlowIn,
              onPageChanged: (index, _) => controller.updateBannerIndex(index)),
          items: banners
              .map(
                (banner) => FRoundedImage(
                  imageUrl: banner,
                  fit: BoxFit.fill,
                ),
              )
              .toList(),
        ),
        const SizedBox(height: FSizes.spaceBtwItems),
        Center(
          child: Obx(
            () => Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                for (int i = 0; i < banners.length; i++)
                  FCircularContainer(
                    width: 20,
                    height: 4,
                    color: controller.carouselCurrentIndex.value == i ? FColors.primary : FColors.light,
                    margin: const EdgeInsets.only(right: FSizes.spaceBtwItems / 2),
                  )
              ],
            ),
          ),
        ),
      ],
    );
  }
}
