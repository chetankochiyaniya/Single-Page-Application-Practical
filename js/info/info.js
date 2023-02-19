const info = `
<div>${navbar}</div>
<hr id="info">
<div class="container" id="info">
    <div class="row align-items-center justify-content-center">
        <div class="col-lg-5 col-md-12">
            <div class="mt-5 mt-lg-0 mt-md-5 mt-xl-0 mx-3">
                <h1 class="display-5 fw-bold">
                    Code Reactors
                </h1>
                <p class="fs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue quam sapien, ac imperdiet nibh facilisis non.
                    Maecenas finibus odio et sapien cursus sodales. Morbi vehicula viverra molestie.
                    Vivamus maximus nibh viverra, ornare diam eu, sodales urna.
                </p>
                <div class="mt-5 align-items-center d-flex">
                    <h4><a href="#learning" class="mt-2"> Start Lerning <i class="fa fa-arrow-right"></i></a></h4>
                </div>
            </div>
        </div>
        <div class="col-lg-7 col-md-12 mt-5">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" class="active" aria-current="true"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="home-img">
                            <img src="./assets/img/slider/1.svg" class="img-fluid" alt="img-1" />
                        </div>

                    </div>
                    <div class="carousel-item">
                        <div class="home-img">
                            <img src="./assets/img/slider/2.svg" class="img-fluid" alt="img-2" />
                        </div>
                    </div>
                    <div class="carousel-item" >
                        <div class="home-img">
                            <img src="./assets/img/slider/3.png" class="img-fluid" alt="img-3" />
                        </div>

                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
</div>
<hr class="mb-5" id="learning">
<div class="d-flex">${blog}</div>
<div>${about}</div>
`