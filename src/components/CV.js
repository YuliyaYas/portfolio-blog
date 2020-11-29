import React from 'react';
import Form from './FormContactUs';
import '../stylesheet/CV.scss';

const CV = () =>  {

      return(
        <div>
        <h2>CV</h2>
        <div className="cv">
          <h3>Exhibition History: </h3>
          <div className="cv-section">
            <i>6/23 - 7/23, 2021</i><p>Artness Contemporary, “Catastrophes: Postmodern mental disaster”, <span>Barcelona, Spain</span></p>
            <i>Tbd, 2021</i><p>Prizma Art Prize, <span>Rome, Italy</span></p>
            <i>1/23-12/25, 2020</i><p>La Fenice Gallery, <span>Hong Kong</span></p>
            <i>10/16-11/13, 2020</i><p>Oxford Arts Alliance, “6th Annual National Juried Exhibition, <span>Oxford, PA,USA</span></p>
            <i>9/30 - 10/29, 2020</i><p>Jones Gallery, “October Group Art Show”, <span>Kansas City, MO, USA</span></p>
            <i>9/15 - 12/14, 2020</i><p> Fusion Art, “3rd Annual Women Artists International Juried Art Exhibition”, <span>Palm Spring, CA, USA</span></p>
            <i>9/11 - 27/11, 2020</i><p> Core New Art Space, “The Aqua Show”, <span>Denver, CO, USA</span> </p>
            <i>1/25 - 2/15, 2020</i><p>Pleiades Gallery, “Altered States - National Exhibition of American Art”, <span>Chelsea, NY, USA</span> </p>
            <i>12/12/19 - 1/10/20</i><p>LIC Open Arts, “Open Diary”, <span>LIC, NY, USA</span> </p>
            <i>11/6, 2019</i><p>Conception Art, “Conception Art Show”, <span>SoHo, NY, USA</span></p>
            <i>10/25, 2019</i><p>The Greenpoint Gallery, “2019 People’s Choice Show”, <span>LIC, NY, USA</span></p>
            <i>5/25, 2017</i><p>A.I.R. Gallery, “Wish You Were Here”, <span>Dumbo, NY, USA</span></p>
            <i>4/28, 2017</i><p>El Barrio’s Artspace PS109, “NeverTheLess: A Night of Nasty Woman”, <span>Upper East Side, NY, USA</span></p>
            <i>11/15, 2016</i><p>Living Gallery BK, “Blue”, <span>Bushwick, NY, USA</span></p>
            <i>4/19-5/10, 2015</i><p>Storefront Ten Eyck Gallery, “Exhibition and AIB 2015 Benefit”, <span>Bushwick, NY, USA</span></p>
          </div>
          
          <h3>Publications:</h3>
          <div className="cv-section">
          <i>2020</i><p>“Tiny Houses”, illustrated and published a coloring book (<a href="https://www.amazon.com/dp/1673973914?ref_=pe_3052080_397514860" target="_blank" rel="noopener noreferrer" id="amz-book">sold on amazon</a>)</p>
          <i>2016</i><p>“Food, Money, Shelter: NYC Resources”,  the Women’s Center for Education and Career Advancement (WCECA).</p>
          </div>

          <h3>Honors and Awards:</h3>
          <div className="cv-section">
          <i>08/2020</i><p>Artist of the Month Award by Artjobs. A competition established to encourage the pursuit of excellence in art. <span>London, UK</span></p>
          <i>2016 </i><p>Shaw Award. Received while studying at Brooklyn College, for excellence in painting. <span>New York City, USA</span></p>
          <i>2015-2016 </i> <p>Bernard Horlick Memorial Scholarship in Visual Arts and Art History Award. This scholarship is in recognition of outstanding achievements in the field of Visual Art. <span>New York City, USA</span></p>
          </div>

          <h3>Founder:</h3>
          <div className="cv-section">
          <i>2020</i><p> Founded a professional flower preservation service Framed Petal <span><a href="framedpetal.com" target="_blank" rel="noopener noreferrer" id="amz-book">framedpetal.com</a></span></p>
          </div>

        </div>
        <center style={{margin: '100px 0'}} ><Form /></center>
      </div>
      );
};

export default CV;
