import React from "react";
// import "./Education.scss"
import "./Experience.scss";
import Fade from "react-reveal/Fade";

const EducationalSkills = (theme) => {
  return (
    <div className="container-fluid  p-0">
      <section className="">
        <div className="container py-2">
          {/* <h1 className="h1 text-center" id="pageHeaderTitle">My Cards Dark</h1> */}
          <Fade left>
            <article
              className={
                theme === "light-theme"
                  ? "postcard light blue"
                  : "postcard drak blue"
              }
            >
              <a className="postcard__img_link">
                <img
                  className="postcard__img"
                  src={require("./Alagappa-university-img.jpg")}
                  alt="Alagappa University"
                />
              </a>
              <div className="postcard__text">
                <h1 className="postcard__title blue">
                  <a>MBA Project Management</a>
                </h1>
                <div className="postcard__subtitle small">
                  <p>Alagappa University (2022 - Present)</p>
                  {/* <time datetime="2020-05-25 12:00:00">
						<i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
					</time> */}
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt py-4">
                  Updating things, visit me next time!
                </div>
              </div>
            </article>
          </Fade>
          <Fade right>
            <article
              className={
                theme === "light-theme"
                  ? "postcard light red"
                  : "postcard drak red"
              }
            >
              <a className="postcard__img_link">
                <img
                  className="postcard__img"
                  src={require("./KCG-college-img.jpg")}
                  alt="KCG College of Technology"
                />
              </a>
              <div className="postcard__text">
                <h1 className="postcard__title red">
                  <a>BE Computer Science Engineering</a>
                </h1>
                <div className="postcard__subtitle small">
                  <p>
                    KCG College of Technology - Hindustan University (2016 -
                    2020)
                  </p>
                  {/* <time datetime="2020-05-25 12:00:00">
						<i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
					</time> */}
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  During my undergraduate years, I participated in several
                  seminars such as design thinking immersion and national-level
                  workshops on 'The Self Driving Car-Power of AL & ML. For a few
                  days, I worked as an intern in the IT sector at the Airport
                  Authority of India. In other institutions, I presented a paper
                  on automated parking systems, and I engaged in a lot of
                  enjoyable stuff like sports and other minor IoT projects.
                </div>
              </div>
            </article>
          </Fade>
          <Fade left>
            <article
              className={
                theme === "light-theme"
                  ? "postcard light green"
                  : "postcard drak green"
              }
            >
              <a className="postcard__img_link">
                <img
                  className="postcard__img"
                  src={require("./high-schooling-img.jpg")}
                  alt="High School Image"
                />
              </a>
              <div className="postcard__text">
                <h1 className="postcard__title green">
                  <a>High Schooling</a>
                </h1>
                <div className="postcard__subtitle small">
                  <p>Patrick's Anglo-Indian & Sowdambika Matriculation</p>
                  {/* <time datetime="2020-05-25 12:00:00">
						<i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
					</time> */}
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  A once-in-a-lifetime opportunity for physical, emotional, and
                  intellectual growth. Yes, I was an introvert in school. One
                  day I was going home I observed an old man struggling to get
                  up, I came up assisted him and asked if he was doing alright,
                  he replied: "I tried playing ringa ringa roses dance but
                  couldn't, I wish I were in your age now". That expression he
                  made inspired me to overcome my shyness and go outdoors, chat
                  to new people, take photographs, and most importantly, enjoy
                  life!
                </div>
              </div>
            </article>
          </Fade>

          {/* <article className="postcard dark yellow">
			<a className="postcard__img_link">
				<img className="postcard__img" src="https://picsum.photos/501/501" alt="Image Title" />
			</a>
			<div className="postcard__text">
				<h1 className="postcard__title yellow"><a>Podcast Title</a></h1>
				<div className="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
				<ul className="postcard__tagbox">
					<li className="tag__item"><i className="fas fa-tag mr-2"></i>Podcast</li>
					<li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li>
					<li className="tag__item play yellow">
						<a><i className="fas fa-play mr-2"></i>Play Episode</a>
					</li>
				</ul>
			</div>
		</article> */}
        </div>
      </section>

      {/* <section className="light">
	<div className="container py-2">
		<div className="h1 text-center text-dark" id="pageHeaderTitle">My Cards Light</div>

		<article className="postcard light blue">
			<a className="postcard__img_link">
				<img className="postcard__img" src="https://picsum.photos/1000/1000" alt="Image Title" />
			</a>
			<div className="postcard__text t-dark">
				<h1 className="postcard__title blue"><a>Podcast Title</a></h1>
				<div className="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
				<ul className="postcard__tagbox">
					<li className="tag__item"><i className="fas fa-tag mr-2"></i>Podcast</li>
					<li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li>
					<li className="tag__item play blue">
						<a><i className="fas fa-play mr-2"></i>Play Episode</a>
					</li>
				</ul>
			</div>
		</article>
		<article className="postcard light red">
			<a className="postcard__img_link">
				<img className="postcard__img" src="https://picsum.photos/501/500" alt="Image Title" />	
			</a>
			<div className="postcard__text t-dark">
				<h1 className="postcard__title red"><a>Podcast Title</a></h1>
				<div className="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
				<ul className="postcard__tagbox">
					<li className="tag__item"><i className="fas fa-tag mr-2"></i>Podcast</li>
					<li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li>
					<li className="tag__item play red">
						<a><i className="fas fa-play mr-2"></i>Play Episode</a>
					</li>
				</ul>
			</div>
		</article>
		<article className="postcard light green">
			<a className="postcard__img_link">
				<img className="postcard__img" src="https://picsum.photos/500/501" alt="Image Title" />
			</a>
			<div className="postcard__text t-dark">
				<h1 className="postcard__title green"><a>Podcast Title</a></h1>
				<div className="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
					</time>
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
				<ul class="postcard__tagbox">
					<li class="tag__item"><i class="fas fa-tag mr-2"></i>Podcast</li>
					<li class="tag__item"><i class="fas fa-clock mr-2"></i>55 mins.</li>
					<li class="tag__item play green">
						<a><i class="fas fa-play mr-2"></i>Play Episode</a>
					</li>
				</ul>
			</div>
		</article>
		<article class="postcard light yellow">
			<a class="postcard__img_link">
				<img class="postcard__img" src="https://picsum.photos/501/501" alt="Image Title" />
			</a>
			<div class="postcard__text t-dark">
				<h1 class="postcard__title yellow"><a>Podcast Title</a></h1>
				<div class="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
					</time>
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
				<ul class="postcard__tagbox">
					<li class="tag__item"><i class="fas fa-tag mr-2"></i>Podcast</li>
					<li class="tag__item"><i class="fas fa-clock mr-2"></i>55 mins.</li>
					<li class="tag__item play yellow">
						<a><i class="fas fa-play mr-2"></i>Play Episode</a>
					</li>
				</ul>
			</div>
		</article>
	</div>
</section> */}
    </div>
  );
};

export default EducationalSkills;
