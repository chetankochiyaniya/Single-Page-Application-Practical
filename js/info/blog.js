"use strict";

let blog_card = ``

const blogData = [
    {
      imgUrl: "./assets/img/blog/cbl-3.png",
      blogTitle: "Ethereum Summit Governance Plan",
      blogContent:"Words combined with a handful of model to generate which looks reasonable.",
      date:"Jan 1, 2023"
    },
    {
      imgUrl: "./assets/img/blog/cbl-1.png",
      blogTitle: "Ethereum Summit Governance Plan",
      blogContent:"Words combined with a handful of model to generate which looks reasonable.",
      date:"Feb 19, 2023"
    },
    {
      imgUrl: "./assets/img/blog/cbl-2.png",
      blogTitle: "Ethereum Summit Governance Plan",
      blogContent:"Words combined with a handful of model to generate which looks reasonable.",
      date:"March 19, 2023"
    },
    {
      imgUrl: "./assets/img/blog/cbl-3.png",
      blogTitle: "Ethereum Summit Governance Plan",
      blogContent:"Words combined with a handful of model to generate which looks reasonable.",
      date:"Feb 22, 2023"
    },  
  ];




const blogCard = (imgUrl,blogTitle,blogContent,date)=>`
<div class="col-lg-3 col-md-4 col-sm-6">
    <div class="card mb-5 mb-lg-0">
        <div class="justify-content-center">
            <a href="#">
            <img src="${imgUrl}" class="img-fluid" alt="thumb" />
            </a>
        </div>
        <h3 class="h4 fw-medium">
            <a href="blog-single.html" class="text-decoration-none text-white">
            ${blogTitle}
            </a>
        </h3>
        <p class="m-0">
        ${blogContent}
        </p>
        <div class="align-items-center py-4">
            <div>
                <span>${date}</span>
            </div>
        </div>
    </div>
</div>
`

blogData.map((e)=>
{
blog_card += blogCard(e.imgUrl,e.blogTitle,e.blogContent,e.date)
}) 
    
const blog = `
<!-- Blog Section  -->
<div class="container">
    <div class="row justify-content-center mt-5">
        <div class="col-lg-6">
            <div class="section-title text-center mb-5">
                <h2 class="text-white"><b>Cryptocurrency Recent Posts</b></h2>
                <p>
                    Right Click on the Download Button in the Font Post and Copy Link
                    Address and Paste it in the New Tab The Download will Start
                    Automatically.
                </p>
            </div>
        </div>
    </div>
    <div class="row justify-content-center" >
        ${blog_card}
    </div>
    <div class="row justify-content-center mb-5">
        <div class="col-lg-3">
            <div class="text-center mt-5">
                <a  class="btn-outline-primary btn rounded-pill text-decoration-none">
                    All Blog Post
                </a>
            </div>
        </div>
    </div>
</div>
`
