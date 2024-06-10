import 'package:get/get.dart';

class HomeController extends GetxController {
  static HomeController get instance => Get.find<HomeController>();

  final carouselCurrentIndex = 0.obs;

  void updateBannerIndex(int index) {
    carouselCurrentIndex.value = index;
  }
}
