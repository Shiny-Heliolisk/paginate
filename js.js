$('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
  });

$('.dg-warpper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  });

$('.slider-map-product').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    nextArrow:"<p>Next</p>",
  });

$('.logo-item').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  });

$('.Sslider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    prevArrow:"<p>Prev</p>",
    nextArrow:"<p>Next</p>",
    autoplay: true,
    autoplaySpeed: 2000,
  });

$('.Ssslider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    prevArrow:"<p>Prev</p>",
    nextArrow:"<p>Next</p>",
    autoplay: true,
    autoplaySpeed: 2000,
  });


  const data = [
    {
      id: 'Mã Sản Phẩm :72104114',
      name: 'Bàn ăn mở rộng Fiona',
      img: 'Pictures/New folder (3)/ban-an-fiona-trang-71304003-2(1).jpg',
      price: '19.280.000 đ'
    },
    {
      id: 'Mã Sản Phẩm :72104115',
      name: 'Bàn ăn mở rộng Freya',
      img: 'Pictures/New folder (8)/STELLA DF189TY.jpg',
      price: '9.950.000 đ'
    },
    {
      id: 'Mã Sản Phẩm :72104117',
      name: 'Sofa vải Jessica góc',
      img: 'Pictures/New folder (8)/sofa-vai-peka-goc-phai.jpg',
      price: '13.794.000 đ'
    },
    {
      id: 'Mã Sản Phẩm :72104119',
      name: 'Sofa vải Cyrus',
      img: 'Pictures/New folder (8)/sofa-vai-1-cho-Cyrus-xam-doni-82636095.jpg',
      price: '266.800.000 đ'
    },
    {
      id: 'Mã Sản Phẩm :72104120',
      name: 'Sofa vải Cyrus',
      img: 'Pictures/New folder (8)/sofa-vai-1-cho-Cyrus-xam-doni-82636095.jpg',
      price: '266.800.000 đ'
    },
    {
      id: 'Mã Sản Phẩm :72104121',
      name: 'Sofa vải Cyrus',
      img: 'Pictures/New folder (8)/sofa-vai-1-cho-Cyrus-xam-doni-82636095.jpg',
      price: '266.800.000 đ'
    },
    {
      id: 'Mã Sản Phẩm :72104122',
      name: 'Sofa vải Cyrus',
      img: 'Pictures/New folder (8)/sofa-vai-1-cho-Cyrus-xam-doni-82636095.jpg',
      price: '266.800.000 đ'
    },
  ]

  document.addEventListener("DOMContentLoaded", () => {
        const products = document.querySelector(".products");
        function showData(products, data) {
          if (data.length <= 4) {
            $('.pagination').hide();
            console.log(true);
          } else {
            console.log(false);
            $('.pagination').show();
          }
          products.innerHTML = data.length
            ? data
                .map((item) => {
                  return `

              <div class="row-s">
                <div class="col-s list-group">
                  <div class="iteam-pull-left list-group-item active">
                    <div class="img-delay-1">
                      <img class="img-in-1" src="${item.img}" alt="${item.name}"/>
                    </div>
                    <div class="name-price">
                    <div class="product--name">
                      ${item.name}
                    </div>
                    <div class="product--price">
                      ${item.price}
                    </div>
                    </div>
                    <div class="sku">
                      ${item.id}
                    </div>
                  </div>
                </div>
              </div>
          `;
                })
                .join(" ")
            : "<div> ANH CHI CO 1 KO 2 KO 2 </div>";
        }
        function pagination(limit) {
          var numberOfItems = data.length; // Get total number of the items that should be paginated
          var limitPerPage = limit; // Limit of items per each page
          
          $('#page .list-group:gt(' + (limitPerPage - 1) + ')').hide(); // Hide all items over page limits (e.g., 5th item, 6th item, etc.)
          var totalPages = Math.round(numberOfItems / limitPerPage); // Get number of pages
          $(".pagination").append("<li class='current-page active'><a href='javascript:void(0)'>" + 1 + "</a></li>"); // Add first page marker
          
          // Loop to insert page number for each sets of items equal to page limit (e.g., limit of 4 with 20 total items = insert 5 pages)
          for (var i = 2; i <= totalPages; i++) {
            $(".pagination").append("<li class='current-page'><a href='javascript:void(0)'>" + i + "</a></li>"); // Insert page number into pagination tabs
          }
          
          // Add next button after all the page numbers  
          $(".pagination").append("<li id='next-page'><a href='javascript:void(0)' aria-label=Next><span aria-hidden=true>&raquo;</span></a></li>");
          
          // Function that displays new items based on page number that was clicked
          $(".pagination li.current-page").on("click", function() {
            // Check if page number that was clicked on is the current page that is being displayed
            if ($(this).hasClass('active')) {
              return false; // Return false (i.e., nothing to do, since user clicked on the page number that is already being displayed)
            } else {
              var currentPage = $(this).index(); // Get the current page number
              $(".pagination li").removeClass('active'); // Remove the 'active' class status from the page that is currently being displayed
              $(this).addClass('active'); // Add the 'active' class status to the page that was clicked on
              $("#page .list-group").hide(); // Hide all items in loop, this case, all the list groups
              var grandTotal = limitPerPage * currentPage; // Get the total number of items up to the page number that was clicked on
          
              // Loop through total items, selecting a new set of items based on page number
              for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
                $("#page .list-group:eq(" + i + ")").show(); // Show items from the new page that was selected
              }
            }
          
          });
          
          // Function to navigate to the next page when users click on the next-page id (next page button)
          $("#next-page").on("click", function() {
            var currentPage = $(".pagination li.active").index(); // Identify the current active page
            // Check to make sure that navigating to the next page will not exceed the total number of pages
            if (currentPage === totalPages) {
              return false; // Return false (i.e., cannot navigate any further, since it would exceed the maximum number of pages)
            } else {
              currentPage++; // Increment the page by one
              $(".pagination li").removeClass('active'); // Remove the 'active' class status from the current page
              $("#page .list-group").hide(); // Hide all items in the pagination loop
              var grandTotal = limitPerPage * currentPage; // Get the total number of items up to the page that was selected
          
              // Loop through total items, selecting a new set of items based on page number
              for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
                $("#page .list-group:eq(" + i + ")").show(); // Show items from the new page that was selected
              }
          
              $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass('active'); // Make new page number the 'active' page
            }
          });
          
          // Function to navigate to the previous page when users click on the previous-page id (previous page button)
          $("#previous-page").on("click", function() {
            var currentPage = $(".pagination li.active").index(); // Identify the current active page
            // Check to make sure that users is not on page 1 and attempting to navigating to a previous page
            if (currentPage === 1) {
              return false; // Return false (i.e., cannot navigate to a previous page because the current page is page 1)
            } else {
              currentPage--; // Decrement page by one
              $(".pagination li").removeClass('active'); // Remove the 'activate' status class from the previous active page number
              $("#page .list-group").hide(); // Hide all items in the pagination loop
              var grandTotal = limitPerPage * currentPage; // Get the total number of items up to the page that was selected
          
              // Loop through total items, selecting a new set of items based on page number
              for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
                $("#page .list-group:eq(" + i + ")").show(); // Show items from the new page that was selected
              }
          
              $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass('active'); // Make new page number the 'active' page
            }
          });
        }
        
        showData(products, data);
        pagination(4);
        
        const input = document.querySelector(".input-search");
        input.addEventListener("keyup", (event) => {
          const target = event.target;
          const value = target.value;
          const convertToLowerCase = value.toLowerCase();
          if (value) {
            const filterData = data.filter((item) => {
              return item.name.toLowerCase().includes(convertToLowerCase);
            });
            showData(products, filterData);
          }
          else{
            showData(products, data);
            pagination(4);
          }
        });
  })

  
  //by pike

  
  // products.forEach(product => {
  //   // sinh div
  //   const node = document.createElement("div");
  //   const div_name = document.createElement("div");
  //   const div_price = document.createElement("div");
  //   // insert text to div:
  //   const name = document.createTextNode(product.name);
  //   const price = document.createTextNode(product.price);
  //   //div cha sinh div con
  //   document.getElementById("products").appendChild(node);
  //   //add class
  //   node.classList.add("item");
    
  //   //sinh ra the img
  //   const image = document.createElement('img');
  //   //set thuoc tinh src cho img
  //   image.setAttribute(
  //     'src',
  //     product.img,
  //   );
  //   //gan the img vao div cha
  //   node.appendChild(image);
  //   node.appendChild(div_name);
  //   node.appendChild(div_price);

  //   // dien ten vao div con
  //   div_name.appendChild(name);
  //   // dien gia vao div con
  //   div_price.appendChild(price);
  // });

