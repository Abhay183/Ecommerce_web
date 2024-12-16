import React from 'react'

function DescriptionBox() {
  return (
    <div class="DescriptionBox bg-white rounded-lg shadow-md p-6">
    <div class="DescriptionBox-navbar flex justify-center items-center mb-4 ">
        <div class="DiscriptionBox-nav text-xl font-bold text-gray-800 cursor-pointer mx-10">Description</div>
        <div class="Review text-x text-gray-600 cursor-pointer mx-10">Reviews (122)</div>
    </div>
    <div class="Descriptionbox-Description text-sm text-gray-700 text-center">
        <p class="mb-4">
            Welcome to [Your E-commerce Website Name], where convenience meets quality! Explore a world of seamless shopping with us.
        </p>
        <p class="mb-4">
            Discover a curated selection of products, from tech gadgets to fashion essentials, all under one virtual roof.
        </p>
        <p class="mb-4">
            Uncompromising quality is our hallmark. We collaborate with trusted brands to bring you products that exceed expectations.
        </p>
        <p class="mb-4">
            Experience the convenience of doorstep delivery with our swift and reliable shipping services.
        </p>
        <p class="mb-4">
            Join our vibrant community of savvy shoppers and elevate your shopping experience today!
        </p>
    </div>
</div>

  )
}

export default DescriptionBox