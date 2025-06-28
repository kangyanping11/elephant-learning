<template>
    <section>
        <div class="relative overflow-hidden w-full h-110">
          <!-- 背景图循环播放 -->
          <div class="absolute inset-0 w-full">
            <div
              v-for="(image, index) in images"
              :key="index"
              class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              :class="{ 'opacity-100': activeIndex === index, 'opacity-0': activeIndex !== index }"
              :style="{ backgroundImage: `url(${image.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
            ></div>
          </div>
          <!-- 文字信息 -->
          <div class="absolute  w-full inset-0 flex flex-col items-start justify-center text-white text-2xl font-bold gap-4 lg:gap-6 p-8">
            <h1 class="text-3xl font-bold">Build Your Ceramic Brand with a Trusted OEM&ODM Partner</h1>
            <div class="text-xl font-medium">Flexible MOQ, Free Design, Fast Sampling</div>
            <button class="cursor-pointer bg-orange-400 rounded-4xl text-white px-4 py-2 text-base font-medium">Get Free Design Now</button>
          </div>
        </div>
        
        <div class="px-6">
            <section class="flex flex-col items-center gap-4 md:gap-6 my-6 md:my-10">
                <div class="text-2xl font-bold text-center">Trusted by</div>
                <div class="grid grid-cols-5 md:grid-cols-10 gap-5">
                    <!-- 图片1-10 -->
                    <img src="https://www.ceranva.com/images/c1.png" alt="Partner 1" >
                    <img src="https://www.ceranva.com/images/c2.png" alt="Partner 1" >
                    <img src="https://www.ceranva.com/images/c3.png" alt="Partner 1" >
                    <img src="https://www.ceranva.com/images/c4.png" alt="Partner 1" >
                    <img src="https://www.ceranva.com/images/c5.png" alt="Partner 1" >
                    <img src="https://www.ceranva.com/images/c6.png" alt="Partner 1" >
                    <img src="https://www.ceranva.com/images/c7.png" alt="Partner 1" >
                    <img src="https://www.ceranva.com/images/c8.png" alt="Partner 1" >
                    <img src="https://www.ceranva.com/images/c9.png" alt="Partner 1" >
                    <img src="https://www.ceranva.com/images/c10.png" alt="Partner 1">
                </div>
            </section>
        </div>

        <div class="px-6">
            <section>
                <div class="text-3xl font-bold">About Ceranva</div>
                <div class="text-base font-medium text-gray-500">Ceramic Mug Manufacture in China</div>
                <div class="grid grid-cols-2 gap-4 py-4">
                    <div class="flex flex-col gap-2 rounded-lg  p-4 bg-orange-50">
                        <div class="text-3xl text-orange-400 font-bold">6</div>
                        <div class="text-base font-medium text-gray-500">Automatic Production Lines</div>
                    </div>
                    <div class="flex flex-col gap-2 rounded-lg  p-4 bg-orange-50">
                        <div class="text-3xl text-orange-400 font-bold">17</div>
                        <div class="text-base font-medium text-gray-500">Industry Experience</div>
                    </div>
                    <div class="flex flex-col gap-2 rounded-lg  p-4 bg-orange-50">
                        <div class="text-3xl text-orange-400 font-bold">3000+</div>
                        <div class="text-base font-medium text-gray-500">Global Brand Cases</div>
                    </div>
                    <div class="flex flex-col gap-2 rounded-lg  p-4 bg-orange-50">
                        <div class="text-3xl text-orange-400 font-bold">3000+</div>
                        <div class="text-base font-medium text-gray-500">㎡ of Production Base</div>
                    </div>
                </div>
            </section>

            <section>
                <!-- 视频 -->
            </section>

            <section class="flex flex-col items-center gap-4 md:gap-6 my-6 md:my-10">
                <div class="text-2xl font-bold text-center">New In</div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 font-medium">
                    <div>
                        <img src="https://www.ceranva.com/images/newin/new_1.png" alt="New Product 1" class="w-full h-auto rounded-3xl">
                        <div class="text-sm md:text-base  font-bold text-center mt-2">Gold foil ceramic mug</div>
                    </div>
                     <div>
                        <img src="https://www.ceranva.com/images/newin/new_2.png" alt="New Product 2" class="w-full h-auto rounded-3xl">
                        <div class="text-sm md:text-base  font-bold text-center mt-2">Custom letter mugs with golden handle</div>
                     </div>
                    <div>
                        <img src="https://www.ceranva.com/images/newin/new_3.jpg" alt="New Product 3" class="w-full h-auto rounded-3xl">
                        <div class="text-sm md:text-base  font-bold text-center mt-2">Lustre Ceramic Mug</div>
                    </div>
                    <div>
                        <img src="https://www.ceranva.com/images/newin/new_4.jpg" alt="New Product 4" class="w-full h-auto rounded-3xl">
                        <div class="text-sm md:text-base  font-bold text-center mt-2">Engraved  Monogram Porcelain Mug</div>
                    </div>  
                    <div>
                        <img src="https://www.ceranva.com/images/newin/new_5.png" alt="New Product 5" class="w-full h-auto rounded-3xl">
                        <div class="text-sm md:text-base  font-bold text-center mt-2">Custom Coffee Mug</div>
                    </div>
                    <div>
                        <img src="https://www.ceranva.com/images/newin/new_6.png" alt="New Product 6" class="w-full h-auto rounded-3xl">
                        <div class="text-sm md:text-base font-bold text-center mt-2">Personalized Coffee Mug</div>
                    </div>
                </div>
                <button class="cursor-pointer bg-orange-400 rounded-4xl text-white px-4 py-2 text-base font-medium">Contact Us Now</button>
            </section>         
        </div>

        <section class="flex flex-col items-center gap-2 w-full md:gap-6 my-6 md:my-10 p-6 md:p-10"
         style="background-image: url('https://www.ceranva.com/images/banner3.png'); background-size: cover; background-position: center; "
        >
            <h1 class="text-white text-xl md:text-3xl lg:text-4xl font-bold">Why Choose Ceranva?</h1>
            <p class="font-medium text-sm md:text-base lg:text-xl text-white">Your Trusted OEM &ODM Partner in Ceramic Products</p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 font-medium">
                    <div class="flex flex-col items-center bg-white rounded-lg gap-3 p-8">
                        <img src="https://www.ceranva.com/images/brings/2.svg" alt="brings" class=" ">
                        <p class="text-base md:text-xl lg:text-2xl font-bold">Design-Driven</p>
                        <p class="font-medium text-sm md:text-base lg:text-xl text-gray-500 text-center ">OEM & ODM support with trending styles or your own designs.</p>
                    </div>
                    <div class="flex flex-col items-center bg-white rounded-lg gap-3 p-8">
                        <img src="https://www.ceranva.com/images/brings/4.svg" alt="brings" class=" ">
                        <p class="text-base md:text-xl lg:text-2xl font-bold">Flexible MOQ</p>
                        <p class="font-medium text-sm md:text-base lg:text-xl text-gray-500 text-center ">Small or large orders welcome — fast sampling in 7 days.</p>
                    </div>
                    <div class="flex flex-col items-center bg-white rounded-lg gap-3 p-8">
                        <img src="https://www.ceranva.com/images/brings/1.svg" alt="brings" class=" ">
                        <p class="text-base md:text-xl lg:text-2xl font-bold">One-Stop Solution</p>
                        <p class="font-medium text-sm md:text-base lg:text-xl text-gray-500 text-center ">Custom shapes, decals, packaging, barcodes — all handled.</p>
                    </div>
                    <div class="flex flex-col items-center bg-white rounded-lg gap-3 p-8">
                        <img src="https://www.ceranva.com/images/brings/3.svg" alt="brings" class=" ">
                        <p class="text-base md:text-xl lg:text-2xl font-bold">Reliable Quality</p>
                        <p class="font-medium text-sm md:text-base lg:text-xl text-gray-500 text-center ">Strict QC + on-time delivery to 30+ countries.</p>
                    </div>
                    <div class="flex flex-col items-center bg-white rounded-lg gap-3 p-8">
                        <img src="https://www.ceranva.com/images/brings/5.svg" alt="brings" class=" ">
                        <p class="text-base md:text-xl lg:text-2xl font-bold">Trusted by 3000+ Brands</p>
                        <p class="font-medium text-sm md:text-base lg:text-xl text-gray-500 text-center ">From Amazon sellers to brand boutiques, partners love our speed and quality.</p>
                    </div>
            </div>
            <h3 class="mt-10 text-base lg:text-2xl font-bold font-sans text-white">GET STARTED FOR ONE-STOP CERAMIC CUSTOMIZATION SOLUTION NOW!</h3>
            <button class="cursor-pointer bg-[#ffdbc6] rounded-4xl px-4 py-2 text-base font-semibold">Request a Quote</button>
        </section>


        <section class="w-full my-6 md:my-10 px-6">
            <img src="https://www.ceranva.com/images/oem.jpg" alt="">
        </section>
  
        <section class="flex flex-col w-full my-6 md:my-10 px-6 gap-8 md:gap-10">
            <h1 class="text-2xl md:text-3xl font-semibold text-center">Ceranva's One-stop Service, <br> Save Worry, Save Trouble, Make Reliable</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 font-medium">
                    <div class="flex flex-col items-center gap-2 rounded-lg p-4 bg-[#f8f8f8]">
                        <span><img src="https://www.ceranva.com/svgs/services/1.svg" alt=""></span>
                        <div class="text-sm md:text-base  font-bold text-center mt-2">Customer Inquiry</div>
                        <div class="text-sm md:text-base text-gray-500 text-center mt-2">Share your design or let us propose.</div>
                    </div>
                    <div class="flex flex-col items-center gap-2 rounded-lg p-4 bg-[#f8f8f8]">
                        <span><img src="https://www.ceranva.com/svgs/services/2.svg" alt=""></span>
                        <div class="text-sm md:text-base  font-bold text-center mt-2">Confirm Order</div>
                        <div class="text-sm md:text-base text-gray-500 text-center mt-2">Deliver the order within 30 days.</div>
                    </div>
                    <div class="flex flex-col items-center gap-2 rounded-lg p-4 bg-[#f8f8f8]">
                        <span><img src="https://www.ceranva.com/svgs/services/3.svg" alt=""></span>
                        <div class="text-sm md:text-base  font-bold text-center mt-2">Packaging and Shipping</div>
                        <div class="text-sm md:text-base text-gray-500 text-center mt-2">Arrive safely from door to door.</div>
                    </div>
                    <div class="flex flex-col items-center gap-2 rounded-lg p-4 bg-[#f8f8f8]">
                        <span><img src="https://www.ceranva.com/svgs/services/4.svg" alt=""></span>
                        <div class="text-sm md:text-base  font-bold text-center mt-2">Confirm Sample</div>
                        <div class="text-sm md:text-base text-gray-500 text-center mt-2">Deliver the samples within 7 days.</div>
                    </div>
                    <div class="flex flex-col items-center gap-2 rounded-lg p-4 bg-[#f8f8f8]">
                        <span><img src="https://www.ceranva.com/svgs/services/5.svg" alt=""></span>
                        <div class="text-sm md:text-base  font-bold text-center mt-2">QC Report</div>
                        <div class="text-sm md:text-base text-gray-500 text-center mt-2">SGS inspection before shipment</div>
                    </div>
                    <div class="flex flex-col items-center gap-2 rounded-lg p-4 bg-[#f8f8f8]">
                        <span><img src="https://www.ceranva.com/svgs/services/6.svg" alt=""></span>
                        <div class="text-sm md:text-base  font-bold text-center mt-2">After-sales Service</div>
                        <div class="text-sm md:text-base text-gray-500 text-center mt-2">Respond to customers' needs quickly.</div>
                    </div>
                     
                </div>
        </section>

         <section class="flex flex-col w-full my-6 md:my-10 px-6 gap-8 md:gap-10">
            <h1 class="text-2xl md:text-3xl font-semibold text-center">Latest Blogs</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 font-medium">
                    <div class="flex flex-row justify-between gap-1 rounded-lg bg-[#f8f8f8]">
                        <span class=""><img class="w-40 md:w-50 shrink-0 aspect-square object-cover rounded-lg" src="https://www.ceranva.com/images/blog/blog1.png" alt=""></span>
                        <div class="p-3 flex flex-col justify-between w-0 flex-grow cursor-pointer">
                            <div class="text-xl font-semibold hover:text-orange-400 
                            text-center line-clamp-2 ">What Makes a Good Ceramic Manufacturer? A Checklist for Buyers</div>
                            <div class=" text-sm md:text-base text-gray-500 text-center line-clamp-2 md:line-clamp-3 leading-relaxed">Choosing the right ceramic manufacturer is crucial. Whether you’re a brand owner, Amazon seller, or distributor, your supplier is your silent partner in quality, consistency, and delivery.</div>
                            <div class="text-orange-400">Learn More > </div>
                        </div>
                    </div>
                    <div class="flex flex-row justify-between gap-1 rounded-lg bg-[#f8f8f8]">
                        <span class=""><img class="w-40 md:w-50 shrink-0 aspect-square object-cover rounded-lg" src="https://www.ceranva.com/images/blog/blog2.png" alt=""></span>
                        <div class="p-3 flex flex-col justify-between w-0 flex-grow cursor-pointer">
                            <div class="text-xl font-semibold hover:text-orange-400 
                            text-center line-clamp-2 ">What Makes a Good Ceramic Manufacturer? A Checklist for Buyers</div>
                            <div class=" text-sm md:text-base text-gray-500 text-center line-clamp-2 md:line-clamp-3 leading-relaxed">Choosing the right ceramic manufacturer is crucial. Whether you’re a brand owner, Amazon seller, or distributor, your supplier is your silent partner in quality, consistency, and delivery.</div>
                            <div class="text-orange-400">Learn More > </div>
                        </div>
                    </div>
                </div>
        </section>

        <section class="flex flex-col items-center gap-2 md:gap-6 my-6 lg:my-10 py-6 lg:py-10 text-white rounded-lg mx-5 lg:mx-9"
         style="background-image: url('	https://www.ceranva.com/images/banner2.png'); background-size: cover; background-position: center; "
        >
            <div class="text-2xl font-bold text-center">Ceranva</div>
            <div class="text-2xl text-center">Contact With Ceranva Today!</div>
            <button class="cursor-pointer bg-orange-400 rounded-4xl text-white px-4 py-2 text-base font-medium">Contact Us Now</button>

        </section>
  
        <section class="flex flex-col w-full my-6 md:my-10 px-6 gap-4 md:gap-6">
            <div class="text-2xl lg:text-3xl font-bold text-center">What our Customers Say</div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                <div class="flex flex-col items-center gap-4 rounded-lg border border-gray-200  p-4 md:p-6 ">

                    <div class="text-sm lg:text-base ">"We’ve done several collections with Ceranva. They really get our style, and the delivery’s always solid. Our customers keep coming back for the quality on their mugs is top.We has made them our go-to partner."</div>
                    <div class="h-1 w-full border-b border-gray-200"></div>
                    <div class="flex flex-row items-center gap-4">
                        <div class="">
                            <img class="w-16 h-16 rounded-full shrink-0 object-cover" src="https://www.ceranva.com/images/say/a1.png" alt="">
                        </div>
                        <div class="grid grid-cols-1">
                            <span class="text-xl md:text-2xl font-semibold">Sarah Johnson</span>
                            <span class="text-gray-500 text-sm md:text-base">Purchasing Manager, HomeStyle inc.</span>
                        </div>
                    </div>

                </div>
                <div class="flex flex-col items-center gap-4 rounded-lg border border-gray-200  p-4 md:p-6 ">
                    <div class="text-sm lg:text-base ">What we like most about Ceranva is how easy they are to work with. Fast samples, thoughtful designs, and shipments that arrive exactly how we want them. It feels like they’re part of our own team.</div>
                    <div class="h-1 w-full border-b border-gray-200"></div>
                    <div class="flex flex-row items-center gap-4">
                        <div class="">
                            <img class="w-16 h-16 rounded-full shrink-0 object-cover" src="https://www.ceranva.com/images/say/a3.png" alt="">
                        </div>
                        <div class="grid grid-cols-1">
                            <span class="text-xl md:text-2xl font-semibold">Jessica</span>
                            <span class="text-gray-500 text-sm md:text-base">Marketing Manager, EuroStyle.</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>


        <section class="flex flex-col items-center gap-8 md:gap-10 bg-[#fff0e7] py-20"
        >   
            <div class="text-3xl lg:text-4xl font-bold text-center">Let’s Get Your Custom Project Moving.</div>
            <div class="text-sm lg:text-base text-center font-sans text-gray-600">
                Fast sampling, flexible MOQ, full OEM/ODM support.
                <br>
                <br>
                Contact our team today and get a quote in 24 hours.
            </div>
            <button class="cursor-pointer bg-orange-400 rounded-4xl text-white px-4 py-2 text-base font-medium">Contact Us Now</button>

        </section>

  


        
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const images = [
  { src: 'https://www.ceranva.com/images/home/banner1.jpg' },
  { src: 'https://www.ceranva.com/images/home/banner2.jpg' },
];
const activeIndex = ref(0);

let intervalId;

const startCarousel = () => {
  intervalId = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % images.length;
  }, 3000); // 每3秒切换一次图片
};

const stopCarousel = () => {
  clearInterval(intervalId);
};

onMounted(startCarousel);
onUnmounted(stopCarousel);
</script>

<style scoped>
</style>
