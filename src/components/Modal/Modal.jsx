import React from "react";
export const Modal= ({setState, show}) => {
  return (
    <div className="modalWrapper"> \
          <figure  className="modalWrapper__exit" onClick={()=>setState(false)}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.70703 0.292969L0.292969 1.70703L7.58594 9L0.292969 16.293L1.70703 17.707L9 10.4141L16.293 17.707L17.707 16.293L10.4141 9L17.707 1.70703L16.293 0.292969L9 7.58594L1.70703 0.292969Z" fill="white"/>
            </svg>
          </figure>
        <div className="modalphoto">
          <figure>
            <img src="assets/images/feed-1.png" alt="" />
          </figure>
          <aside className="modalaside">
         

            <div className="modalaside__header">
              <div className="modalaside__user">
                <figure>
                  <img src={`assets/images/wendy.png`} alt="" />
                </figure>
                <h4>wendy</h4>
              </div>             
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6 19.2C13.6 18.2059 12.7941 17.4 11.8 17.4C10.8059 17.4 10 18.2059 10 19.2C10 20.1941 10.8059 21 11.8 21C12.7941 21 13.6 20.1941 13.6 19.2ZM11.8 10.2C12.7941 10.2 13.6 11.0059 13.6 12C13.6 12.9941 12.7941 13.8 11.8 13.8C10.8059 13.8 10 12.9941 10 12C10 11.0059 10.8059 10.2 11.8 10.2ZM11.8 3C12.7941 3 13.6 3.80589 13.6 4.8C13.6 5.79411 12.7941 6.6 11.8 6.6C10.8059 6.6 10 5.79411 10 4.8C10 3.80589 10.8059 3 11.8 3Z" fill="black"/>
                </svg>
            </div>
            <div className="modalaside__user usermargin">
                <figure>
                  <img src={`assets/images/wendy.png`} alt="" />
                </figure>
                <h4>wendy</h4>
            </div>
              <div className="modalaside__hashtag">
                <p>
                  #paisajes #paisajesnaturales #paisajesespaña #paisajesperu #paisajesecuador #paisajesargentinos #paisajes_mexico #paisajes_argentinos #paisajesdechile #paisajeschile #paisajesvenezolanos #paisajesargentina #paisajescolombianos #paisajescostarica #paisajesincreibles 
                </p>
              </div>
              <div className="modalaside__icons">
                  <div className='post__option__icons'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.55 19.7101L12 21L13.45 19.7101L13.4558 19.705C18.6025 15.122 22 12.0967 22 8.39509C22 5.36894 19.585 3 16.5 3C14.76 3 13.09 3.79455 12 5.04523C10.91 3.79455 9.24 3 7.5 3C4.415 3 2 5.36894 2 8.39509C2 12.0967 5.39747 15.122 10.5442 19.705L10.55 19.7101Z" fill="black"/>
                          <path d="M12 21L11.6677 21.3736C11.8572 21.5421 12.1428 21.5421 12.3323 21.3736L12 21ZM10.55 19.7101L10.2176 20.0836L10.2177 20.0837L10.55 19.7101ZM13.45 19.7101L13.7823 20.0837L13.7825 20.0835L13.45 19.7101ZM13.4558 19.705L13.7882 20.0784L13.7883 20.0784L13.4558 19.705ZM12 5.04523L11.6231 5.37374C11.718 5.4827 11.8555 5.54523 12 5.54523C12.1445 5.54523 12.282 5.4827 12.3769 5.37374L12 5.04523ZM10.5442 19.705L10.2117 20.0784L10.2118 20.0784L10.5442 19.705ZM12.3323 20.6264L10.8823 19.3365L10.2177 20.0837L11.6677 21.3736L12.3323 20.6264ZM13.1177 19.3365L11.6677 20.6264L12.3323 21.3736L13.7823 20.0837L13.1177 19.3365ZM13.1233 19.3315L13.1175 19.3367L13.7825 20.0835L13.7882 20.0784L13.1233 19.3315ZM21.5 8.39509C21.5 10.0785 20.732 11.649 19.2738 13.3995C17.8102 15.1564 15.7068 17.031 13.1232 19.3315L13.7883 20.0784C16.3515 17.7959 18.5202 15.8665 20.0421 14.0395C21.5693 12.2063 22.5 10.4133 22.5 8.39509H21.5ZM16.5 3.5C19.318 3.5 21.5 5.65411 21.5 8.39509H22.5C22.5 5.08376 19.852 2.5 16.5 2.5V3.5ZM12.3769 5.37374C13.3741 4.22958 14.9077 3.5 16.5 3.5V2.5C14.6123 2.5 12.8059 3.35952 11.6231 4.71672L12.3769 5.37374ZM7.5 3.5C9.09228 3.5 10.6259 4.22958 11.6231 5.37374L12.3769 4.71672C11.1941 3.35952 9.38772 2.5 7.5 2.5V3.5ZM2.5 8.39509C2.5 5.65411 4.68202 3.5 7.5 3.5V2.5C4.14798 2.5 1.5 5.08376 1.5 8.39509H2.5ZM10.8768 19.3315C8.29324 17.031 6.18979 15.1564 4.72625 13.3995C3.26802 11.649 2.5 10.0785 2.5 8.39509H1.5C1.5 10.4133 2.43071 12.2063 3.95791 14.0395C5.47981 15.8665 7.64847 17.7959 10.2117 20.0784L10.8768 19.3315ZM10.8824 19.3366L10.8767 19.3315L10.2118 20.0784L10.2176 20.0836L10.8824 19.3366Z" fill="black"/>
                      </svg>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C13.7882 21.75 15.4658 21.2679 16.9077 20.4265L20.7628 21.7115C21.0323 21.8013 21.3295 21.7312 21.5303 21.5303C21.7312 21.3294 21.8013 21.0323 21.7115 20.7628L20.4265 16.9077C21.268 15.4658 21.75 13.7882 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25ZM3.75 12C3.75 7.44365 7.44365 3.75 12 3.75C16.5563 3.75 20.25 7.44365 20.25 12C20.25 13.6246 19.7812 15.1374 18.9717 16.4132C18.8509 16.6036 18.8222 16.8383 18.8935 17.0522L19.8141 19.8141L17.0522 18.8935C16.8383 18.8222 16.6037 18.8509 16.4133 18.9717C15.1374 19.7812 13.6246 20.25 12 20.25C7.44365 20.25 3.75 16.5563 3.75 12Z" fill="black"/>
                      </svg>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.0051 2.25002C1.68484 2.24784 1.39853 2.44926 1.29239 2.75143C1.18624 3.05359 1.28368 3.38982 1.53494 3.5884L9.96855 10.2541L11.3708 21.0962C11.4124 21.4177 11.6557 21.676 11.9741 21.7367C12.2925 21.7974 12.6139 21.6467 12.7708 21.3631L22.6562 3.49911C22.7843 3.26759 22.781 2.98569 22.6474 2.75729C22.5138 2.52889 22.2697 2.38779 22.0051 2.38599L2.0051 2.25002ZM12.5652 18.6367L11.4803 10.2483L20.0056 5.19109L12.5652 18.6367ZM4.17719 3.76482L19.2966 3.86761L10.7339 8.94703L4.17719 3.76482Z" fill="black"/>
                      </svg>
                  </div>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.022 14.1246L11.9838 13.0782L10.9194 14.0979L5.5 19.2896V4.5H18.0455V19.1881L13.022 14.1246ZM4 19.6906C4 20.8015 5.33309 21.4059 6.20595 20.6906L11.9571 15.181L17.3156 20.5823C18.1822 21.3268 19.5455 20.7277 19.5455 19.6023V3.87126C19.5455 3.39008 19.1449 3 18.6508 3H4.89464C4.40054 3 4 3.39008 4 3.87126V19.6906Z" fill="black"/>
                </svg>
              </div>
              <article className='modalaside__article'>
                <h4>49,643 Me gusta</h4>
                <p><strong> wendy </strong>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <span className='medium'>
                    Ver los 269 comentarios <br />
                </span>
                <span className='small'>Hace 31 minutos · <strong>Ver traducción</strong></span>
            </article>
            <div className='modalaside__comments'>
                <figure>
                    <img src="assets/images/wendy.png" alt="" />
                </figure>
                <input type="text" placeholder='Agrega un comentario...' />
                <span>Publicar</span>
            </div>
          </aside>
        </div>
    </div>
  )
};