export function Index() {
  return (
    <>
      {/*absolute bg-dark-purple rounded-b-hero left-[-40%] h-[481px] w-[180%] -z-40*/}
      <header className={'relative w-full overflow-x-clip '}>
        <div
          className={
            'absolute bg-dark-purple rounded-b-hero left-[-50%] w-[200%] h-full -z-40 '
          }
        ></div>
        <section className={'flex flex-wrap'}>
          <img
            alt={'workit logo'}
            src={'/images/logo-light.svg'}
            width={96}
            height={24}
            className={'mx-4 my-6 flex-none md:mx-8'}
          />
          <div className={'grow'} />
          <a
            href={'#'}
            className={
              'flex-none text-base leading-8 text-white tracking-tight text-right font-bold my-6 mx-4 md:mx-8 hover:text-eucalyptus underline underline-offset-8 decoration-[3px] decoration-eucalyptus'
            }
          >
            Apply for access
          </a>
        </section>
        <section className={'mt-8 text-center -mb-8'}>
          <h1
            className={
              'font-serif text-white text-5xl font-semibold mx-auto max-w-xs'
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
            src={'/images/image-hero.webp'}
            alt={'phone with data app'}
            className={
              'mx-auto translate-y-24 max-w-xs md:max-w-lg md:translate-y-32'
            }
          />
        </section>
      </header>
      <main>
        <section className={'relative w-full overflow-x-hidden'}>
          <div
            className={
              'absolute bg-ghost-white rounded-b-hero left-[-50%] w-[200%] h-full -z-50'
            }
          ></div>
          <div className={'h-48'}></div>
          <div
            className={'flex flex-col justify-center items-center md:flex-row md:w-[80%] md:mx-auto'}
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
                  'font-serif font-extrabold text-dark-purple text-4xl text-center mt-6 md:text-left md:ml-8'
                }
              >
                Actionable insights
              </h2>
              <p
                className={'text-center text-davys-grey mx-4 mt-4 md:text-left md:ml-8'}
              >
                Optimize your products, improve customer satisfaction and stay
                ahead of the competition with our product data analytics.
              </p>
            </div>
          </div>
          <div className={'flex flex-col items-center mt-10 md:flex-row md:w-[80%] md:mx-auto'}>
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
                  'font-serif font-extrabold text-dark-purple text-4xl text-center mt-6 md:text-left md:ml-8'
                }
              >
                Data-driven decisions
              </h2>
              <p className={'text-center text-davys-grey mx-4 mt-4 md:text-left md:ml-8'}>
                Make data-driven decisions with our product data analytics. Our
                AI-generated reports help you unlock insights hidden in your
                product data.
              </p>
            </div>
          </div>
          <div className={'flex flex-col items-center mt-10 md:flex-row md:w-[80%] md:mx-auto'}>
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
                  'font-serif font-extrabold text-dark-purple text-4xl text-center mt-6 md:text-left md:ml-8'
                }
              >
                Always affordable
              </h2>
              <p className={'text-center text-davys-grey mx-4 mt-4 md:text-left md:ml-8'}>
                Always affordable pricing that scales with your business. Get
                top-quality product data analytics services without hidden costs
                or unexpected fees.
              </p>
            </div>
          </div>
          <div className={'h-20'}></div>
        </section>
        <section className={'mt-48'}>
          <div className={'relative max-w-2xl mx-auto h-80'}>
            <img
              src={'/images/image-founder.webp'}
              alt={'founder'}
              className={'absolute left-0 right-0 -top-24 z-0 max-w-xs mx-auto md:mx-0 md:-left-12'}
            />
            <div
              className={
                'absolute top-40 bg-dark-purple text-white text-center mx-3 w-xs p-8 z-10 md:max-w-lg md:text-left md:top-20 md:right-4 md:p-12'
              }
            >
              <h3 className={'font-serif text-4xl'}>Be the first to test</h3>
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
          </div>
        </section>
      </main>
      <footer className={'mt-48 md:mb-24'}>
        <img
          src={'/images/logo-dark.svg'}
          alt={'workit logo'}
          className={'h-full mt-24 mx-auto'}
        />
        <div className={'flex align-center justify-center my-12'}>
          <img
            src={'/images/icon-facebook.svg'}
            alt={'facebook icon'}
            width={'16'}
            height={'16'}
            className={'mx-3'}
          />
          <img
            src={'/images/icon-twitter.svg'}
            alt={'twitter icon'}
            width={'16'}
            height={'16'}
            className={'mx-3'}
          />
          <img
            src={'/images/icon-instagram.svg'}
            alt={'instagram icon'}
            width={'16'}
            height={'16'}
            className={'mx-3'}
          />
        </div>
      </footer>
    </>
  );
}

export default Index;
