import Image from 'next/image';

export function Index() {
  return (
    <>
      {/*absolute bg-dark-purple rounded-b-hero left-[-40%] h-[481px] w-[180%] -z-40*/}
      <header className={'relative w-full overflow-x-clip '}>
        <div
          className={
            'absolute bg-dark-purple rounded-b-hero left-[-50%] w-[200%] h-full -z-40 md:left-[-25%] md:w-[150%] lg:left-[-12.5%] lg:w-[125%]'
          }
        ></div>
        <Image
          src={'/frontendmentor/images/bg-pattern-1.svg'}
          alt={''}
          width={341}
          height={317}
          className={'hidden md:block absolute top-40 -left-56 lg:-left-32'}
        />
        <img
          src={'/frontendmentor/images/bg-pattern-2.svg'}
          alt={''}
          className={'hidden md:block absolute top-64 -right-20 lg:-right-12'}
        />
        <section className={'flex flex-wrap'}>
          <img
            alt={'workit logo'}
            src={'/frontendmentor/images/logo-light.svg'}
            width={96}
            height={24}
            className={'mx-4 my-6 flex-none md:mx-8 lg:mx-32'}
          />
          <div className={'grow'} />
          <a
            href={'#'}
            className={
              'flex-none text-base leading-8 text-white tracking-tight text-right font-bold my-6 mx-4 md:mx-8 lg:mx-32 hover:text-eucalyptus underline underline-offset-8 decoration-[3px] decoration-eucalyptus'
            }
          >
            Apply for access
          </a>
        </section>
        <section className={'mt-8 text-center -mb-8 lg:-mb-16'}>
          <h1
            className={
              'font-serif text-white text-5xl font-semibold mx-auto max-w-xs lg:text-6xl lg:max-w-md'
            }
          >
            Data{' '}
            <span
              className={
                'underline underline-offset-4 decoration-eucalyptus decoration-[3px]'
              }
            >
              tailored
            </span>{' '}
            to your needs.
          </h1>
          <button
            className={
              'bg-eucalyptus text-center font-bold mt-8 -mb-4 md:-mb-14 py-4 px-8 hover:bg-transparent border-2 hover:text-eucalyptus border-eucalyptus'
            }
          >
            Learn more
          </button>
          <img
            src={'/frontendmentor/images/image-hero.webp'}
            alt={'phone with data app'}
            className={
              'mx-auto translate-y-24 max-w-xs md:max-w-lg md:translate-y-32 lg:max-w-2xl lg:translate-y-36'
            }
          />
        </section>
      </header>
      <main>
        <section className={'relative w-full overflow-x-hidden'}>
          <div
            className={
              'absolute bg-eucalyptus rounded-b-hero left-[-50%] w-[200%] h-full -z-50 md:left-[-25%] md:w-[150%] lg:left-[-12.5%] lg:w-[125%]'
            }
          ></div>
          <div className={'h-48 lg:h-72'}></div>
          <div className={'lg:flex lg:flex-row lg:mx-32'}>
            <div
              className={
                'flex flex-col justify-center items-center md:flex-row md:w-[80%] md:mx-auto lg:flex-col'
              }
            >
              <div
                className={
                  'rounded-full border border-1 basis-12 shrink-0 w-12 h-12 leading-[3rem] font-serif font-extrabold text-dark-purple text-2xl text-center align-middle mx-auto'
                }
              >
                1
              </div>
              <div className={'md:grow'}>
                <h2
                  className={
                    'font-serif font-extrabold text-dark-purple text-4xl text-center mt-6 md:text-left md:ml-8 lg:text-center'
                  }
                >
                  Actionable insights
                </h2>
                <p
                  className={
                    'text-center text-davys-grey mx-4 mt-4 md:text-left md:ml-8 lg:text-center'
                  }
                >
                  Optimize your products, improve customer satisfaction and stay
                  ahead of the competition with our product data analytics.
                </p>
              </div>
            </div>
            <div
              className={
                'flex flex-col items-center mt-10 md:flex-row md:w-[80%] md:mx-auto lg:flex-col lg:mt-0'
              }
            >
              <div
                className={
                  'rounded-full border border-1 basis-12 shrink-0 w-12 h-12 leading-[3rem] font-serif font-extrabold text-dark-purple text-2xl text-center align-middle mx-auto'
                }
              >
                2
              </div>
              <div>
                <h2
                  className={
                    'font-serif font-extrabold text-dark-purple text-4xl text-center mt-6 md:text-left md:ml-8 lg:text-center'
                  }
                >
                  Data-driven decisions
                </h2>
                <p
                  className={
                    'text-center text-davys-grey mx-4 mt-4 md:text-left md:ml-8 lg:text-center'
                  }
                >
                  Make data-driven decisions with our product data analytics.
                  Our AI-generated reports help you unlock insights hidden in
                  your product data.
                </p>
              </div>
            </div>
            <div
              className={
                'flex flex-col items-center mt-10 md:flex-row md:w-[80%] md:mx-auto lg:flex-col lg:mt-0'
              }
            >
              <div
                className={
                  'rounded-full border border-1 basis-12 shrink-0 w-12 h-12 leading-[3rem] font-serif font-extrabold text-dark-purple text-2xl text-center align-middle mx-auto'
                }
              >
                3
              </div>
              <div>
                <h2
                  className={
                    'font-serif font-extrabold text-dark-purple text-4xl text-center mt-6 md:text-left md:ml-8 lg:text-center'
                  }
                >
                  Always affordable
                </h2>
                <p
                  className={
                    'text-center text-davys-grey mx-4 mt-4 md:text-left md:ml-8 lg:text-center'
                  }
                >
                  Always affordable pricing that scales with your business. Get
                  top-quality product data analytics services without hidden
                  costs or unexpected fees.
                </p>
              </div>
            </div>
          </div>
          <div className={'h-20 lg:h-40'}></div>
        </section>
        <section className={'mt-48 lg:mt-32'}>
          <div
            className={
              'relative max-w-2xl mx-auto h-80 md:max-w-3xl lg:max-w-5xl'
            }
          >
            <img
              src={'/frontendmentor/images/image-founder.webp'}
              alt={'founder'}
              className={
                'absolute left-0 right-0 -top-24 z-0 max-w-xs mx-auto md:ml-8 lg:-top-8 lg:ml-16'
              }
            />
            <div
              className={
                'absolute top-40 bg-dark-purple text-white text-center mx-3 w-xs p-8 z-10 md:max-w-lg md:text-left md:top-20 md:right-0 md:mr-8 md:p-12 lg:max-w-2xl'
              }
            >
              <h3 className={'font-serif text-4xl lg:text-5xl'}>
                Be the first to test
              </h3>
              <p className={'mt-4 leading-6'}>
                Hi, I'm Louis Graham, the founder of the company. Book a demo
                call with me to become a beta tester for our app and kickstart
                your company. Apply for access below and I’ll be in touch to
                schedule a call.
              </p>
              <button
                className={
                  'bg-eucalyptus text-center text-dark-purple font-extrabold mt-8 py-4 px-8 hover:bg-transparent border-2 hover:text-eucalyptus border-eucalyptus'
                }
              >
                Apply for access
              </button>
            </div>
            <img
              src={'/frontendmentor/images/bg-pattern-3.svg'}
              alt={''}
              className={
                'hidden md:block absolute top-80 right-10 z-10 lg:top-64 lg:right-24'
              }
            />
          </div>
        </section>
      </main>
      <footer className={'mt-48 md:mb-24'}>
        <img
          src={'/frontendmentor/images/logo-dark.svg'}
          alt={'workit logo'}
          className={'h-full mt-24 mx-auto'}
        />
        <div className={'flex align-center justify-center my-12'}>
          <a href={'#'}>
            <img
              src={'/frontendmentor/images/icon-facebook.svg'}
              alt={'facebook icon'}
              width={'16'}
              height={'16'}
              className={'mx-3'}
            />
          </a>
          <a href={'#'}>
            <img
              src={'/frontendmentor/images/icon-twitter.svg'}
              alt={'twitter icon'}
              width={'16'}
              height={'16'}
              className={'mx-3'}
            />
          </a>
          <a href={'#'}>
            <img
              src={'/frontendmentor/images/icon-instagram.svg'}
              alt={'instagram icon'}
              width={'16'}
              height={'16'}
              className={'mx-3'}
            />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Index;
