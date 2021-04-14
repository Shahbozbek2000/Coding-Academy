import Link from 'next/link'

export function ScratchHeader() {
    return (
        <div>
        <div id="theme-main-banner" className="banner-two">
        <div data-src="https://www.witszen.com/wp-content/uploads/2018/07/Web-Design-Company-1-2000x1200.jpg">
          <div className="camera_caption">
            <div className="container">
              <h5 className="wow fadeInUp animated">Web Development</h5>
              <h1 className="wow fadeInUp animated" data-wow-delay="0.2s">
                CAT kurslari studentlarga butun hayoti davomida yuqori darajada
                dasturchilar bo'lishiga ko'mak beradi
              </h1>
              <Link href="/">
                <a
                  className="tran3s hvr-trim wow fadeInUp
                        animated p-bg-color button-one"
                  data-wow-delay="0.3s"
                >
                  Batafsil
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div data-src="https://cdn.hintword.com/articles/images/1564516961273159.jpeg">
          <div className="camera_caption">
            <div className="container">
              <h5 className="wow fadeInUp animated">Web Development</h5>
              <h1 className="wow fadeInUp animated" data-wow-delay="0.2s">
                CAT kurslari studentlarga butun hayoti davomida yuqori darajada
                dasturchilar bo'lishiga ko'mak beradi
              </h1>
              <Link href="/">
                <a
                  className="tran3s hvr-trim wow fadeInUp
                        animated p-bg-color button-one"
                  data-wow-delay="0.3s"
                >
                  Batafsil
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}
