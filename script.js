function search_Data() {
    var div = document.createElement('div');
    var img = document.createElement('IMG');
    let input = document.getElementById('searchbar').value;
    input = input.toLowerCase();
    var res = fetch('https://api.tvmaze.com/search/shows?q=girls')
        .then(result => result.json())
        .then(data => {

            for (i = 0; i < data.length; i++) {
                if (data[i].show.name.toLowerCase().includes(input)) {

                    if (data[i].show.image.medium !== null) {
                        img.src = data[i].show.image.medium;
                    } else {
                        img.src = "https://picsum.photos/200/300"
                    }



                    var Name = data[i].show.name;

                    var genres = data[i].show.genres;
                    var premired = data[i].show.premiered;
                    var scheduled = data[i].show.schedule.time;

                    div.innerHTML = Name + genres + premired + scheduled;
                    div.append(img);
                    document.body.append(div);

                }

            }
        })


}