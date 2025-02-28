        function checkLogin() {
            const username = getCookie("username");
            if (username) {
                window.location.href = 'account.html';
            } else {
                window.location.href = 'loginpage.html';
            }
        }

        function getCookie(name) {
            const cookies = document.cookie.split('; ');
            for (let cookie of cookies) {
                let [key, value] = cookie.split('=');
                if (key === name) return decodeURIComponent(value);
            }
            return null;
        }

        document.getElementById('searchBar').addEventListener('input', function(event) {
            const query = this.value.toLowerCase();
            if (query) {
                displaySearchResults(query);
            } else {
                displayAllProducts();
            }
        });

        function displayAllProducts() {
            const products = [
				{ name: 'Blue Breitling Watch', price: '£100.00', img: 'watch1.png', link: 'product1.html' },
				{ name: 'Green Rolex Watch', price: '£105.00', img: 'watch2.png', link: 'product2.html' },
				{ name: 'Brown Breitling Watch', price: '£110.00', img: 'watch3.png', link: 'product3.html' },
				{ name: 'Patek Philippe Watch', price: '£115.00', img: 'watch4.png', link: 'product4.html' },
				{ name: 'Tudor Watch', price: '£120.00', img: 'watch5.png', link: 'product5.html' },
				{ name: 'Blue Rolex Watch', price: '£125.00', img: 'watch6.png', link: 'product6.html' },
				{ name: 'Green Breitling Watch', price: '£130.00', img: 'watch7.png', link: 'product7.html' },
				{ name: 'Black Tag Heuer Watch', price: '£135.00', img: 'watch8.png', link: 'product8.html' },
				{ name: 'Blue and Gold Rolex Watch', price: '£140.00', img: 'watch9.png', link: 'product9.html' },
				{ name: 'Red Arrows Watch', price: '£145.00', img: 'Product44.png', link: 'product10.html' },
				{ name: 'Two Rose Gold Rings', price: '£150.00', img: 'Product11.png', link: 'product11.html' },
				{ name: 'Gold Necklace Chain', price: '£155.00', img: 'Product12.png', link: 'product12.html' },
				{ name: 'Love Heart Choker', price: '£160.00', img: 'Product13.png', link: 'product13.html' },
				{ name: 'Two Hearted Necklace', price: '£165.00', img: 'Product14.png', link: 'product14.html' },
				{ name: 'Diamond Heart Necklace', price: '£170.00', img: 'Product15.png', link: 'product15.html' },
				{ name: 'Sapphire Earrings', price: '£175.00', img: 'Product16.png', link: 'product16.html' },
				{ name: 'Silver Necklace Chain', price: '£180.00', img: 'Product17.png', link: 'product17.html' },
				{ name: 'Gold and Diamond Ring', price: '£185.00', img: 'Product18.png', link: 'product18.html' },
				{ name: 'Ruby Earrings', price: '£190.00', img: 'Product19.png', link: 'product19.html' },
				{ name: 'Green Rolex Watch', price: '£195.00', img: 'watch2.png', link: 'product20.html' },
				{ name: 'Ruby Flowered Earrings', price: '£200.00', img: 'Product21.png', link: 'product21.html' },
				{ name: 'Diamond Ring', price: '£205.00', img: 'Product20.png', link: 'product22.html' },
				{ name: 'Diamond Studded Ring', price: '£210.00', img: 'Product23.png', link: 'product23.html' },
				{ name: 'Black Seiko Watch', price: '£215.00', img: 'Product24.png', link: 'product24.html' },
				{ name: 'Emerald Necklace', price: '£330.00', img: 'Product25.png', link: 'product25.html' },
				{ name: 'Amethyst Earrings', price: '£220.00', img: 'Product26.png', link: 'product26.html' },
				{ name: 'Diamond Studded Necklace', price: '£225.00', img: 'Product27.png', link: 'product27.html' },
				{ name: 'Diamond Necklace', price: '£230.00', img: 'Product28.png', link: 'product28.html' },
				{ name: 'Beaded Bracelet', price: '£235.00', img: 'Product29.png', link: 'product29.html' },
				{ name: 'Pearl Necklace', price: '£240.00', img: 'Product30.png', link: 'product30.html' },
				{ name: 'Sun Choker', price: '£245.00', img: 'Product31.png', link: 'product31.html' },
				{ name: 'Ruby Choker', price: '£250.00', img: 'Product32.png', link: 'product32.html' },
				{ name: 'Emerald Choker', price: '£255.00', img: 'Product33.png', link: 'product33.html' },
				{ name: 'Gold Necklace', price: '£260.00', img: 'Product34.png', link: 'product34.html' },
				{ name: 'Flower Ring', price: '£265.00', img: 'Product35.png', link: 'product35.html' },
				{ name: 'Blossom Necklace', price: '£270.00', img: 'Product36.png', link: 'product36.html' },
				{ name: 'Gold Choker', price: '£275.00', img: 'Product37.png', link: 'product37.html' },
				{ name: 'Diamond Necklace', price: '£280.00', img: 'Product38.png', link: 'product38.html' },
				{ name: 'Ruby and Diamond Choker', price: '£285.00', img: 'Product39.png', link: 'product39.html' },
				{ name: 'Sun Choker', price: '£290.00', img: 'Product31.png', link: 'product40.html' },
				{ name: 'Plain Gold Ring', price: '£295.00', img: 'Product41.png', link: 'product41.html' },
				{ name: 'Emerald Necklace', price: '£300.00', img: 'Product42.png', link: 'product42.html' },
				{ name: 'Amethyst Necklace', price: '£305.00', img: 'Product43.png', link: 'product43.html' },
				{ name: 'Red Arrows Watch', price: '£310.00', img: 'Product44.png', link: 'product44.html' },
				{ name: 'Apple Watch Series 5', price: '£315.00', img: 'Product45.png', link: 'product45.html' },
				{ name: 'Frederique Constant Watch', price: '£320.00', img: 'Product46.png', link: 'product46.html' },
				{ name: 'Apple Watch Series 7', price: '£325.00', img: 'Product47.png', link: 'product47.html' },
				{ name: 'Silver Chain', price: '£330.00', img: 'Product17.png', link: 'product48.html' },
				{ name: 'Diamond Studded Ring', price: '£335.00', img: 'Product49.png', link: 'product49.html' },
  				{ name: 'Tri Colour Rings', price: '£340.00', img: 'Product50.png', link: 'product50.html' }
			];

            const productGrid = document.getElementById('productGrid');
            productGrid.innerHTML = ''; // Clear previous products

            products.forEach(product => {
                const productCard = `
                    <div class="product-card">
                        <div class="product-image">
                            <img src="${product.img}" alt="${product.name}">
                        </div>
                        <h3>${product.name}</h3>
                        <p>${product.price}</p>
                        <a href="${product.link}">View</a>
                    </div>
                `;
                productGrid.innerHTML += productCard;
            });
        }

        function displaySearchResults(query) {
            const products = [
				{ name: 'Blue Breitling Watch', price: '£100.00', img: 'watch1.png', link: 'product1.html' },
				{ name: 'Green Rolex Watch', price: '£105.00', img: 'watch2.png', link: 'product2.html' },
				{ name: 'Brown Breitling Watch', price: '£110.00', img: 'watch3.png', link: 'product3.html' },
				{ name: 'Patek Philippe Watch', price: '£115.00', img: 'watch4.png', link: 'product4.html' },
				{ name: 'Tudor Watch', price: '£120.00', img: 'watch5.png', link: 'product5.html' },
				{ name: 'Blue Rolex Watch', price: '£125.00', img: 'watch6.png', link: 'product6.html' },
				{ name: 'Green Breitling Watch', price: '£130.00', img: 'watch7.png', link: 'product7.html' },
				{ name: 'Black Tag Heuer Watch', price: '£135.00', img: 'watch8.png', link: 'product8.html' },
				{ name: 'Blue and Gold Rolex Watch', price: '£140.00', img: 'watch9.png', link: 'product9.html' },
				{ name: 'Red Arrows Watch', price: '£145.00', img: 'Product44.png', link: 'product10.html' },
				{ name: 'Two Rose Gold Rings', price: '£150.00', img: 'Product11.png', link: 'product11.html' },
				{ name: 'Gold Necklace Chain', price: '£155.00', img: 'Product12.png', link: 'product12.html' },
				{ name: 'Love Heart Choker', price: '£160.00', img: 'Product13.png', link: 'product13.html' },
				{ name: 'Two Hearted Necklace', price: '£165.00', img: 'Product14.png', link: 'product14.html' },
				{ name: 'Diamond Heart Necklace', price: '£170.00', img: 'Product15.png', link: 'product15.html' },
				{ name: 'Sapphire Earrings', price: '£175.00', img: 'Product16.png', link: 'product16.html' },
				{ name: 'Silver Necklace Chain', price: '£180.00', img: 'Product17.png', link: 'product17.html' },
				{ name: 'Gold and Diamond Ring', price: '£185.00', img: 'Product18.png', link: 'product18.html' },
				{ name: 'Ruby Earrings', price: '£190.00', img: 'Product19.png', link: 'product19.html' },
				{ name: 'Green Rolex Watch', price: '£195.00', img: 'watch2.png', link: 'product20.html' },
				{ name: 'Ruby Flowered Earrings', price: '£200.00', img: 'Product21.png', link: 'product21.html' },
				{ name: 'Diamond Ring', price: '£205.00', img: 'Product20.png', link: 'product22.html' },
				{ name: 'Diamond Studded Ring', price: '£210.00', img: 'Product23.png', link: 'product23.html' },
				{ name: 'Black Seiko Watch', price: '£215.00', img: 'Product24.png', link: 'product24.html' },
				{ name: 'Emerald Necklace', price: '£330.00', img: 'Product25.png', link: 'product25.html' },
				{ name: 'Amethyst Earrings', price: '£220.00', img: 'Product26.png', link: 'product26.html' },
				{ name: 'Diamond Studded Necklace', price: '£225.00', img: 'Product27.png', link: 'product27.html' },
				{ name: 'Diamond Necklace', price: '£230.00', img: 'Product28.png', link: 'product28.html' },
				{ name: 'Beaded Bracelet', price: '£235.00', img: 'Product29.png', link: 'product29.html' },
				{ name: 'Pearl Necklace', price: '£240.00', img: 'Product30.png', link: 'product30.html' },
				{ name: 'Sun Choker', price: '£245.00', img: 'Product31.png', link: 'product31.html' },
				{ name: 'Ruby Choker', price: '£250.00', img: 'Product32.png', link: 'product32.html' },
				{ name: 'Emerald Choker', price: '£255.00', img: 'Product33.png', link: 'product33.html' },
				{ name: 'Gold Necklace', price: '£260.00', img: 'Product34.png', link: 'product34.html' },
				{ name: 'Flower Ring', price: '£265.00', img: 'Product35.png', link: 'product35.html' },
				{ name: 'Blossom Necklace', price: '£270.00', img: 'Product36.png', link: 'product36.html' },
				{ name: 'Gold Choker', price: '£275.00', img: 'Product37.png', link: 'product37.html' },
				{ name: 'Diamond Necklace', price: '£280.00', img: 'Product38.png', link: 'product38.html' },
				{ name: 'Ruby and Diamond Choker', price: '£285.00', img: 'Product39.png', link: 'product39.html' },
				{ name: 'Sun Choker', price: '£290.00', img: 'Product31.png', link: 'product40.html' },
				{ name: 'Plain Gold Ring', price: '£295.00', img: 'Product41.png', link: 'product41.html' },
				{ name: 'Emerald Necklace', price: '£300.00', img: 'Product42.png', link: 'product42.html' },
				{ name: 'Amethyst Necklace', price: '£305.00', img: 'Product43.png', link: 'product43.html' },
				{ name: 'Red Arrows Watch', price: '£310.00', img: 'Product44.png', link: 'product44.html' },
				{ name: 'Apple Watch Series 5', price: '£315.00', img: 'Product45.png', link: 'product45.html' },
				{ name: 'Frederique Constant Watch', price: '£320.00', img: 'Product46.png', link: 'product46.html' },
				{ name: 'Apple Watch Series 7', price: '£325.00', img: 'Product47.png', link: 'product47.html' },
				{ name: 'Silver Chain', price: '£330.00', img: 'Product17.png', link: 'product48.html' },
				{ name: 'Diamond Studded Ring', price: '£335.00', img: 'Product49.png', link: 'product49.html' },
  				{ name: 'Tri Colour Rings', price: '£340.00', img: 'Product50.png', link: 'product50.html' }
            ];

            const searchResults = products.filter(product =>
                product.name.toLowerCase().includes(query) ||
                product.price.toLowerCase().includes(query)
            );

            const productGrid = document.getElementById('productGrid');
            productGrid.innerHTML = ''; // Clear previous search results

            searchResults.forEach(product => {
                const productCard = `
                    <div class="product-card">
                        <div class="product-image">
                            <img src="${product.img}" alt="${product.name}">
                        </div>
                        <h3>${product.name}</h3>
                        <p>${product.price}</p>
                        <a href="${product.link}">View</a>
                    </div>
                `;
                productGrid.innerHTML += productCard;
            });
        }

        // Display all products by default
        displayAllProducts();
