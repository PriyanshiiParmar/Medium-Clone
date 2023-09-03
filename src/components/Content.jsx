import ContentDetail from "./ContentDetail";
import Sider from './Sider'
import img1 from "./logo/austin-chan-ukzHlkoz1IE-unsplash.jpg";
import img2 from "./logo/finn-hackshaw-FQgI8AD-BSg-unsplash.jpg";
import img3 from "./logo/michael-dam-mEZ3PoFGs_k-unsplash.jpg";
import img4 from "./logo/random1.jpg";
import img5 from "./logo/random2.jpg";
import img6 from "./logo/trend_img1.jpg";
const Content = ({ img, name, title, des, date_time }) => {
  return (
    <div className="content">
      <div className="content-detail">
        <ContentDetail
          img={img1}
          name=" Jude Ellison S. Doyle"
          title="The “Male Loneliness Epidemic” Does Not Exist"
          des="The media panic around “male loneliness” is driven by cherry-picked statistics and sexism. Now, that’s sad."
          date_time="Sep 1 ·  7 min read  . "
          pic={img1}
        />
        <ContentDetail
          img={img2}
          name=" Thomas Smith"
          title="Something Must Be Done About LED Bulbs"
          des="Why “Eco-friendly” bulbs are failing consumers and the environment, and what to do about it"
          date_time="Aug 4 · 10 min read  Led "
          pic={img2}
        />
        <ContentDetail
          img={img3}
          name=" Michelle Wiles in Better Marketing"
          title="Van Leeuwen and the art of not advertising          "
          des="How to scale your brand without ads.          "
          date_time="Aug 28
          ·
          7 min read
          ·
  "
          pic={img3}
        />
        <ContentDetail
          img={img4}
          name=" Bernie’s Daughter"
          title="Today is National Grief Awareness Day, and Here’s "
          des="What I Wish Someone Had Told Me About Grief
          Grief is far more complicated than being sad and crying"
          date_time="Aug 30
          ·
          6 min read  "
          pic={img4}
        />

        <ContentDetail
          img={img5}
          name=" Quintessa Williams
          in
          Momentume"
          title="  Unchecked Treatment: The Anti-Black Hate Crime Epidemic"
          des="More silent dangers mount amongst the consistent rise in racial hate crimes against African Americans."
          date_time="Aug 30
          ·
          5 min read   "
          pic={img5}
        /> <ContentDetail
          img={img6}
          name=" Kim Witten, PhD"
          title="Stop Trying to Manage Your Time"
          des="Do this instead"
          date_time="Aug 22
          ·
          6 min read   "
          pic={img6}
        />
      </div>
      <div className="sider">
<Sider/>
      </div>
      
    </div>
  );
};
export default Content;
