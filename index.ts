import * as address from "./address";
import * as analytics from "./analytics";
import * as answer from "./answer";
import * as app from "./app";
import * as avatar from "./avatar";
import * as bitcoin from "./bitcoin";
import * as cache from "./cache";
import * as carbon from "./carbon";
import * as chat from "./chat";
import * as comments from "./comments";
import * as contact from "./contact";
import * as crypto from "./crypto";
import * as currency from "./currency";
import * as db from "./db";
import * as dns from "./dns";
import * as email from "./email";
import * as emoji from "./emoji";
import * as evchargers from "./evchargers";
import * as event from "./event";
import * as file from "./file";
import * as forex from "./forex";
import * as fx from "./function";
import * as geocoding from "./geocoding";
import * as gifs from "./gifs";
import * as google from "./google";
import * as helloworld from "./helloworld";
import * as holidays from "./holidays";
import * as id from "./id";
import * as image from "./image";
import * as ip from "./ip";
import * as joke from "./joke";
import * as lists from "./lists";
import * as location from "./location";
import * as memegen from "./memegen";
import * as minecraft from "./minecraft";
import * as movie from "./movie";
import * as mq from "./mq";
import * as news from "./news";
import * as nft from "./nft";
import * as notes from "./notes";
import * as otp from "./otp";
import * as password from "./password";
import * as ping from "./ping";
import * as place from "./place";
import * as postcode from "./postcode";
import * as prayer from "./prayer";
import * as price from "./price";
import * as qr from "./qr";
import * as quran from "./quran";
import * as routing from "./routing";
import * as rss from "./rss";
import * as search from "./search";
import * as sentiment from "./sentiment";
import * as sms from "./sms";
import * as space from "./space";
import * as spam from "./spam";
import * as stock from "./stock";
import * as stream from "./stream";
import * as sunnah from "./sunnah";
import * as thumbnail from "./thumbnail";
import * as time from "./time";
import * as translate from "./translate";
import * as tunnel from "./tunnel";
import * as twitter from "./twitter";
import * as url from "./url";
import * as user from "./user";
import * as vehicle from "./vehicle";
import * as weather from "./weather";
import * as wordle from "./wordle";
import * as youtube from "./youtube";

export class Client {
  constructor(token: string) {
    this.address = new address.AddressService(token);
    this.analytics = new analytics.AnalyticsService(token);
    this.answer = new answer.AnswerService(token);
    this.app = new app.AppService(token);
    this.avatar = new avatar.AvatarService(token);
    this.bitcoin = new bitcoin.BitcoinService(token);
    this.cache = new cache.CacheService(token);
    this.carbon = new carbon.CarbonService(token);
    this.chat = new chat.ChatService(token);
    this.comments = new comments.CommentsService(token);
    this.contact = new contact.ContactService(token);
    this.crypto = new crypto.CryptoService(token);
    this.currency = new currency.CurrencyService(token);
    this.db = new db.DbService(token);
    this.dns = new dns.DnsService(token);
    this.email = new email.EmailService(token);
    this.emoji = new emoji.EmojiService(token);
    this.evchargers = new evchargers.EvchargersService(token);
    this.event = new event.EventService(token);
    this.file = new file.FileService(token);
    this.forex = new forex.ForexService(token);
    this.function = new fx.FunctionService(token);
    this.geocoding = new geocoding.GeocodingService(token);
    this.gifs = new gifs.GifsService(token);
    this.google = new google.GoogleService(token);
    this.helloworld = new helloworld.HelloworldService(token);
    this.holidays = new holidays.HolidaysService(token);
    this.id = new id.IdService(token);
    this.image = new image.ImageService(token);
    this.ip = new ip.IpService(token);
    this.joke = new joke.JokeService(token);
    this.lists = new lists.ListsService(token);
    this.location = new location.LocationService(token);
    this.memegen = new memegen.MemegenService(token);
    this.minecraft = new minecraft.MinecraftService(token);
    this.movie = new movie.MovieService(token);
    this.mq = new mq.MqService(token);
    this.news = new news.NewsService(token);
    this.nft = new nft.NftService(token);
    this.notes = new notes.NotesService(token);
    this.otp = new otp.OtpService(token);
    this.password = new password.PasswordService(token);
    this.ping = new ping.PingService(token);
    this.place = new place.PlaceService(token);
    this.postcode = new postcode.PostcodeService(token);
    this.prayer = new prayer.PrayerService(token);
    this.price = new price.PriceService(token);
    this.qr = new qr.QrService(token);
    this.quran = new quran.QuranService(token);
    this.routing = new routing.RoutingService(token);
    this.rss = new rss.RssService(token);
    this.search = new search.SearchService(token);
    this.sentiment = new sentiment.SentimentService(token);
    this.sms = new sms.SmsService(token);
    this.space = new space.SpaceService(token);
    this.spam = new spam.SpamService(token);
    this.stock = new stock.StockService(token);
    this.stream = new stream.StreamService(token);
    this.sunnah = new sunnah.SunnahService(token);
    this.thumbnail = new thumbnail.ThumbnailService(token);
    this.time = new time.TimeService(token);
    this.translate = new translate.TranslateService(token);
    this.tunnel = new tunnel.TunnelService(token);
    this.twitter = new twitter.TwitterService(token);
    this.url = new url.UrlService(token);
    this.user = new user.UserService(token);
    this.vehicle = new vehicle.VehicleService(token);
    this.weather = new weather.WeatherService(token);
    this.wordle = new wordle.WordleService(token);
    this.youtube = new youtube.YoutubeService(token);
  }

  address: address.AddressService;
  analytics: analytics.AnalyticsService;
  answer: answer.AnswerService;
  app: app.AppService;
  avatar: avatar.AvatarService;
  bitcoin: bitcoin.BitcoinService;
  cache: cache.CacheService;
  carbon: carbon.CarbonService;
  chat: chat.ChatService;
  comments: comments.CommentsService;
  contact: contact.ContactService;
  crypto: crypto.CryptoService;
  currency: currency.CurrencyService;
  db: db.DbService;
  dns: dns.DnsService;
  email: email.EmailService;
  emoji: emoji.EmojiService;
  evchargers: evchargers.EvchargersService;
  event: event.EventService;
  file: file.FileService;
  forex: forex.ForexService;
  function: fx.FunctionService;
  geocoding: geocoding.GeocodingService;
  gifs: gifs.GifsService;
  google: google.GoogleService;
  helloworld: helloworld.HelloworldService;
  holidays: holidays.HolidaysService;
  id: id.IdService;
  image: image.ImageService;
  ip: ip.IpService;
  joke: joke.JokeService;
  lists: lists.ListsService;
  location: location.LocationService;
  memegen: memegen.MemegenService;
  minecraft: minecraft.MinecraftService;
  movie: movie.MovieService;
  mq: mq.MqService;
  news: news.NewsService;
  nft: nft.NftService;
  notes: notes.NotesService;
  otp: otp.OtpService;
  password: password.PasswordService;
  ping: ping.PingService;
  place: place.PlaceService;
  postcode: postcode.PostcodeService;
  prayer: prayer.PrayerService;
  price: price.PriceService;
  qr: qr.QrService;
  quran: quran.QuranService;
  routing: routing.RoutingService;
  rss: rss.RssService;
  search: search.SearchService;
  sentiment: sentiment.SentimentService;
  sms: sms.SmsService;
  space: space.SpaceService;
  spam: spam.SpamService;
  stock: stock.StockService;
  stream: stream.StreamService;
  sunnah: sunnah.SunnahService;
  thumbnail: thumbnail.ThumbnailService;
  time: time.TimeService;
  translate: translate.TranslateService;
  tunnel: tunnel.TunnelService;
  twitter: twitter.TwitterService;
  url: url.UrlService;
  user: user.UserService;
  vehicle: vehicle.VehicleService;
  weather: weather.WeatherService;
  wordle: wordle.WordleService;
  youtube: youtube.YoutubeService;
}
export default (token = process.env.M3O_API_TOKEN as string) => {
  return {
    address: new address.AddressService(token),
    analytics: new analytics.AnalyticsService(token),
    answer: new answer.AnswerService(token),
    app: new app.AppService(token),
    avatar: new avatar.AvatarService(token),
    bitcoin: new bitcoin.BitcoinService(token),
    cache: new cache.CacheService(token),
    carbon: new carbon.CarbonService(token),
    chat: new chat.ChatService(token),
    comments: new comments.CommentsService(token),
    contact: new contact.ContactService(token),
    crypto: new crypto.CryptoService(token),
    currency: new currency.CurrencyService(token),
    db: new db.DbService(token),
    dns: new dns.DnsService(token),
    email: new email.EmailService(token),
    emoji: new emoji.EmojiService(token),
    evchargers: new evchargers.EvchargersService(token),
    event: new event.EventService(token),
    file: new file.FileService(token),
    forex: new forex.ForexService(token),
    function: new fx.FunctionService(token),
    geocoding: new geocoding.GeocodingService(token),
    gifs: new gifs.GifsService(token),
    google: new google.GoogleService(token),
    helloworld: new helloworld.HelloworldService(token),
    holidays: new holidays.HolidaysService(token),
    id: new id.IdService(token),
    image: new image.ImageService(token),
    ip: new ip.IpService(token),
    joke: new joke.JokeService(token),
    lists: new lists.ListsService(token),
    location: new location.LocationService(token),
    memegen: new memegen.MemegenService(token),
    minecraft: new minecraft.MinecraftService(token),
    movie: new movie.MovieService(token),
    mq: new mq.MqService(token),
    news: new news.NewsService(token),
    nft: new nft.NftService(token),
    notes: new notes.NotesService(token),
    otp: new otp.OtpService(token),
    password: new password.PasswordService(token),
    ping: new ping.PingService(token),
    place: new place.PlaceService(token),
    postcode: new postcode.PostcodeService(token),
    prayer: new prayer.PrayerService(token),
    price: new price.PriceService(token),
    qr: new qr.QrService(token),
    quran: new quran.QuranService(token),
    routing: new routing.RoutingService(token),
    rss: new rss.RssService(token),
    search: new search.SearchService(token),
    sentiment: new sentiment.SentimentService(token),
    sms: new sms.SmsService(token),
    space: new space.SpaceService(token),
    spam: new spam.SpamService(token),
    stock: new stock.StockService(token),
    stream: new stream.StreamService(token),
    sunnah: new sunnah.SunnahService(token),
    thumbnail: new thumbnail.ThumbnailService(token),
    time: new time.TimeService(token),
    translate: new translate.TranslateService(token),
    tunnel: new tunnel.TunnelService(token),
    twitter: new twitter.TwitterService(token),
    url: new url.UrlService(token),
    user: new user.UserService(token),
    vehicle: new vehicle.VehicleService(token),
    weather: new weather.WeatherService(token),
    wordle: new wordle.WordleService(token),
    youtube: new youtube.YoutubeService(token),
  };
};
