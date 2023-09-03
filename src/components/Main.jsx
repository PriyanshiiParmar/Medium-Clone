import stat from "./logo/stat (1).png";
import img1 from './logo/austin-chan-ukzHlkoz1IE-unsplash.jpg'
import img2 from './logo/finn-hackshaw-FQgI8AD-BSg-unsplash.jpg'
import img3 from './logo/michael-dam-mEZ3PoFGs_k-unsplash.jpg'
import img4 from './logo/random1.jpg'
import img5 from './logo/random2.jpg'
import img6 from './logo/trend_img1.jpg'
import Trending from "./Trending";
const Main = () => {
  return (
    <div className="main">
      <div className="trend-logo">
        <img className="trend" src={stat} alt=""></img>
        <h4> Trending on Medium</h4>
      </div>
      <div className="trend-details">
        <Trending
        id="01"
        img={img1}
        title="The Bold Italic"
        des="Why I’m breaking up with Burning Man"
        date_time="Aug 23 · 7 min read"
        />
          <Trending
        id="02"
        img={img2}
        title="Kevin Chisholm in Flutter"
        des="What's new in Flutter 3.13"
        date_time="Aug 16 · 12 min read"
        />
           <Trending
        id="03"
        img={img3}
        title="Wes O'Donnell"
        des='Ukrain Now Using "Cardboard Drones" to Devastate Russian Airfields '
        date_time="Aug 31 · 3 min read"
        />
         <Trending
        id="01"
        img={img4}
        title="The PyCoach in Artificial Corner"
        des="Python in Excel Will Reshape How Data Analysts Work"
        date_time="Aug 24 · 5 min read"
        />
          <Trending
        id="02"
        img={img5}
        title="Claire Gong"
        des="What nobody tells you about a career break (and how to emotionally...)"
        date_time="Aug 24 · 12 min read"
        />
           <Trending
        id="03"
        img={img6}
        title="Netflix Technology Blog in Netflix TechBlog"
        des="Zero Configuration Service Mesh On-Demand Cluster Discovery"
        date_time="Aug 30 · 9 min read"
        />
      </div>
    </div>
  );
};
export default Main;
