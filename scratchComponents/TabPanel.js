

export default function TabPanel() {
    return (
        <div>
        <section className="tabs-wrapper">
        <div className="tabs">
          <input type="radio" id="tab1" name="tab-control" checked />
          <input type="radio" id="tab2" name="tab-control" />
          <input type="radio" id="tab3" name="tab-control" />
          <input type="radio" id="tab4" name="tab-control" />

          <ul>
            <li title="Features">
              <label htmlFor="tab1" role="button">
                <br />
                <span>Programming Fundamentals</span>
              </label>
            </li>
            <li title="Delivery Contents">
              <label htmlFor="tab2" role="button">
                <br />
                <span>Javascript</span>
              </label>
            </li>
            <li title="Shipping">
              <label htmlFor="tab3" role="button">
                <br />
                <span>Front-End frameworks</span>
              </label>
            </li>
            <li title="Returns">
              <label htmlFor="tab4" role="button">
                <br />
                <span>Students Projects</span>
              </label>
            </li>
          </ul>

          <div className="slider">
            <div className="indicator"></div>
          </div>

          <div className="content">
            <section>
              <h2>Features</h2>Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Ea dolorem sequi, quo tempore in eum obcaecati
              atque quibusdam officiis est dolorum minima deleniti ratione
              molestias numquam. Voluptas voluptates quibusdam cum?
            </section>
            <section>
              <h2>Delivery Contents</h2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              quas adipisci a accusantium eius ut voluptatibus ad impedit nulla,
              ipsa qui. Quasi temporibus eos commodi aliquid impedit amet,
              similique nulla.
            </section>
            <section>
              <h2>Shipping</h2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
              nemo ducimus eius, magnam error quisquam sunt voluptate labore,
              excepturi numquam! Alias libero optio sed harum debitis! Veniam,
              quia in eum.
            </section>
            <section>
              <h2>Returns</h2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
              dicta vero rerum? Eaque repudiandae architecto libero
              reprehenderit aliquam magnam ratione quidem? Nobis doloribus
              molestiae enim deserunt necessitatibus eaque quidem incidunt.
            </section>
          </div>
        </div>
      </section> 
        </div>
    )
}
