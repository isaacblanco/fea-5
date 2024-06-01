import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Article } from '../models/article.interface';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  private token: string = '0b73cd76ddc8b2cbaa39e2da0f27a96d';
  private apiUrl = `https://gnews.io/api/v4/search?q=angular&token=${this.token}&lang=en`;

  constructor(private http: HttpClient) {
    this.inicializar();
  }

  private articlesData = [
    {
      title:
        'Eco-brutalism: when angular concrete meets the wonder of nature - in pictures',
      description:
        'Olivia Broome’s cult Instagram account pairs the stark architectural style with flowing greenery',
      content:
        'On her @brutalistplants Instagram page, Olivia Broome collects photographs that combine the angular shapes of raw concrete with the greenery of the natural world. “I really enjoy the aesthetic of eco-brutalism and tropical modernism,” she says. “I lo... [553 chars]',
      url: 'https://www.theguardian.com/artanddesign/gallery/2024/may/11/eco-brutalism-when-angular-concrete-meets-the-wonder-of-nature-in-pictures',
      image:
        'https://i.guim.co.uk/img/media/80a6aef7721b54d6310372f972664e4fe659c97e/56_151_3314_1989/master/3314.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=68c5909a05fdcdedbbcbd76b61c43be9',
      publishedAt: '2024-05-11T16:00:30Z',
      source: {
        name: 'The Guardian',
        url: 'https://www.theguardian.com',
      },
    },
    {
      title:
        'Galaxy Z Fold 6 leak confirms the biggest design changes Samsung has planned',
      description:
        "A leak from a popular case maker shows Samsung's decision to go with a more angular, thinner design for its Galaxy Z Fold 6 foldable this time around.",
      content:
        "Back in February, we got our first glimpse at some of the Galaxy Z Fold 6's new angular design via several renders and a high-definition video from veteran leaker @Onleaks. Now, a new leak from popular US-based case manufacturer Thinborne has confirm... [2095 chars]",
      url: 'https://www.tomsguide.com/phones/samsung-phones/galaxy-z-fold-6-leak-confirms-the-biggest-design-changes-samsung-has-planned',
      image:
        'https://cdn.mos.cms.futurecdn.net/KB622L2cJmeRttCwXaB277-1200-80.jpg',
      publishedAt: '2024-05-07T19:18:44Z',
      source: {
        name: "Tom's Guide",
        url: 'https://www.tomsguide.com',
      },
    },
    {
      title: 'When and where to see the Tesla Cybertruck in Sydney, Australia',
      description:
        "Tesla's extra large, extra angular Cybertruck ute will be on display at four showrooms around New South Wales for the first leg of its local tour.",
      content:
        'Tesla has confirmed when and where its controversial electric pickup truck will be shown off on the first leg of its Australian tour.\nIn a post on X, formerly known as Twitter, the electric car manufacturer has confirmed the Cybertruck will initially... [2252 chars]',
      url: 'https://7news.com.au/motoring/when-and-where-to-see-the-tesla-cybertruck-in-sydney-australia-c-14455980',
      image:
        'https://images.7news.com.au/publication/C-14455980/41a07e2c2337239f288e4bad8b101d51ef5260fa-16x9-x0y52w1000h563.png?imwidth=1200',
      publishedAt: '2024-04-26T12:39:37Z',
      source: {
        name: '7NEWS.com.au',
        url: 'https://7news.com.au',
      },
    },
    {
      title: "2025 Hyundai Palisade's luxurious interior spied",
      description:
        'The new Hyundai Palisade has been spied again, previewing more of the three-row SUV’s interior and angular exterior.',
      content:
        'The 2025 Hyundai Palisade is set to wear a bolder, boxier body than the current car, while featuring an interior with an upscale look.\nImages uploaded to South Korean motoring forum New Car Scoops by an anonymous user show the second row of the new H... [1573 chars]',
      url: 'https://7news.com.au/motoring/2025-hyundai-palisades-luxurious-interior-spied-c-14398456',
      image:
        'https://images.7news.com.au/publication/C-14398456/ad9078a0729feeffda0531d9e08a9c65735fdbf1-16x9-x0y43w828h466.jpg?imwidth=1200',
      publishedAt: '2024-04-22T02:38:57Z',
      source: {
        name: '7NEWS.com.au',
        url: 'https://7news.com.au',
      },
    },
    {
      title: 'PWHL unveils Tiffany-designed Walter Cup championship trophy',
      description:
        'The sterling silver trophy features an angular design inspired by ice, weighing about 35 pounds, standing 24 inches tall and over 13 inches wide',
      content:
        'Open this photo in gallery: The Walter Cup features an angular design inspired by ice, weighing about 35 pounds, standing 24 inches tall and over 13 inches wide, with a removable base for the engraved name of each year’s winning team.HO/The Canadian ... [2205 chars]',
      url: 'https://www.theglobeandmail.com/sports/hockey/article-pwhl-unveils-tiffany-designed-walter-cup-championship-trophy/',
      image:
        'https://www.theglobeandmail.com/resizer/v2/QL5ENRPNMJHEHLG6I3MGA4E224.jpg?auth=6cd4a56b142b5454cee661177d7e996199c6b9dd49bc01bce2f58e22fb35e945&width=1200&height=800&quality=80',
      publishedAt: '2024-04-04T14:35:02Z',
      source: {
        name: 'The Globe and Mail',
        url: 'https://www.theglobeandmail.com',
      },
    },
    {
      title:
        'Elon Musk boosts headcount by 86% at biggest site of his Texas empire',
      description:
        'Tesla Inc. boosted headcount 86% last year to 22,777 in the fast-growing region in Texas, where the carmaker churns out Model Y SUVs and angular Cybertrucks....',
      content:
        'Elon Musk is now officially Austin’s largest private employer.\nTesla Inc. boosted its headcount 86% last year to 22,777 in the fast-growing region in Texas, where the carmaker churns out Model Y SUVs and angular Cybertrucks. It surpassed grocery stor... [5454 chars]',
      url: 'https://www.dallasnews.com/business/2024/04/02/elon-musk-boosts-headcount-by-86-at-biggest-site-of-his-texas-empire/',
      image:
        'https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/v2/ZLXCB4LHXFBCZKL6FYS5FXXIM4.jpg?auth=ecfc2043eff3ecd49d5bdb6c390930fa860a087eeb51013a8b71b0949ae7ecd2&height=467&width=830&smart=true',
      publishedAt: '2024-04-02T12:00:00Z',
      source: {
        name: 'The Dallas Morning News',
        url: 'https://www.dallasnews.com',
      },
    },
    {
      title:
        "When Fans Were Surprised To See Kylie Jenner's 'Real Face' After Plastic Surgery In Unedited Video",
      description:
        "Fans compare Kylie's angular jaw and fuller lips to a 'ventriloquist dummy' in the new 'The Kardashians' teaser.",
      content:
        'Fans are now convinced that Kylie Jenner has "gone under the knife." The latest teaser of season 3 of The Kardashians has dropped and the beauty mogul features in the short clip without any filters, exposing her "real face."\nFans were quick to compar... [3008 chars]',
      url: 'https://www.inquisitr.com/kylie-jenner-unveils-unedited-video-exposing-real-face-after-plastic-surgery-623267-623267',
      image:
        'https://dab57h0r8ahff.cloudfront.net/623267/uploads/2b7f3870-f6fd-11ed-b70e-45d754a9b4ec_800_420.jpeg',
      publishedAt: '2024-03-30T13:06:13Z',
      source: {
        name: 'The Inquisitr',
        url: 'https://www.inquisitr.com',
      },
    },
    {
      title:
        'Why is taking care of your emotional health (even more) important after 50?',
      description:
        'Aunque cada etapa de la vida es única y, como tal, hay que abrazarlas, a partir de los 50 años vivimos un momento propicio para explorar el significado profundo del bienestar emocional y cómo se convierte en la piedra angular de una vida plena.',
      content:
        'Emotional health is the foundation upon which we build vitality and overall satisfaction. It’s not just about experiencing fleeting moments of joy, it’s about building practices that nourish emotions and build resilience over time.\nIn other words, it... [2690 chars]',
      url: 'https://sparkchronicles.com/why-is-taking-care-of-your-emotional-health-even-more-important-after-50/',
      image:
        'https://imagenes.miarevista.es/files/article_social_75/uploads/2024/03/03/65e473b2a3d24.jpeg',
      publishedAt: '2024-03-03T14:31:49Z',
      source: {
        name: 'Spark Chronicles',
        url: 'https://sparkchronicles.com',
      },
    },
    {
      title: '6 Of The Fastest TVRs Ever Made, Ranked',
      description:
        'The TVR is a unique sportscar known for its sleek, angular, lightweight design that complements its speed and powerful engines. Here are the fastest ever made.',
      content:
        "6 Of The Fastest TVRs Ever Made, Ranked\nWhen you talk about the history of sports cars, you'd be remiss not to touch on TVR. Born in the aftermath of World War II by Trevor Wilkinson as TrevCar Motors, the British manufacturer has developed a line of... [833 chars]",
      url: 'https://www.slashgear.com/1518527/fastest-tvr-cars-ever-made/',
      image:
        'https://www.slashgear.com/img/gallery/6-of-the-fastest-tvrs-ever-made-ranked/l-intro-1708008688.jpg',
      publishedAt: '2024-02-18T23:15:01Z',
      source: {
        name: 'SlashGear',
        url: 'https://www.slashgear.com',
      },
    },
    {
      title:
        'James Brandon Lewis Quartet: Transfiguration review - angular, explosive experimentation',
      description:
        'The New York-based sax player and co mix it up, from funk shuffle to full-on swing, on their blistering fourth album',
      content:
        'American tenor saxophonist James Brandon Lewis has one of the fiercest sounds in modern jazz. Hard-blowing and full of declarative melodies, he has released more than 10 records as a bandleader since his 2010 debut, Moments, channelling everything fr... [1197 chars]',
      url: 'https://www.theguardian.com/music/2024/feb/17/james-brandon-lewis-quartet-transfiguration-review-angular-explosive-experimentation',
      image:
        'https://i.guim.co.uk/img/media/d96f7605e3d6281a78da4f37d744eb807216eed4/0_611_2160_1296/master/2160.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tcmV2aWV3LTQucG5n&enable=upscale&s=fb315fe2b7fc28fab926914f539660ba',
      publishedAt: '2024-02-17T16:00:18Z',
      source: {
        name: 'The Guardian',
        url: 'https://www.theguardian.com',
      },
    },
  ];
  private arrArticles: Article[] = [];

  private inicializar() {
    for (let a of this.articlesData) {
      this.arrArticles.push(a);
    }
  }

  /*
  OPCION LEYENDO DESDE LOS DATOS LOCALES
  getAllArticles(): Observable<Article[]> {
    console.log('getAllArticles() called');
    return of(this.arrArticles);
  }

  getArticleByUrl(url: string): Observable<Article | undefined> {
    console.log('getArticleByUrl() called');
    return of(this.articlesData.find((article) => article.url === url));
  }
  */

  getAllArticles(): Observable<Article[]> {
    return this.http
      .get<{ totalArticles: number; articles: Article[] }>(this.apiUrl)
      .pipe(map((response) => response.articles));
  }

  getArticleByUrl(url: string): Observable<Article | undefined> {
    return this.http
      .get<{ totalArticles: number; articles: Article[] }>(this.apiUrl)
      .pipe(
        map((response) =>
          response.articles.find((article) => article.url === url)
        )
      );
  }
}
