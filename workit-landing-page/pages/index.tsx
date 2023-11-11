export function Index() {
  return (
    <>
      {/*absolute bg-dark-purple rounded-b-hero left-[-40%] h-[481px] w-[180%] -z-40*/}
      <header className={'relative'}>
        <div
          className={
            'absolute bg-dark-purple rounded-b-hero left-[-40%] w-[180%] h-full -z-40'
          }
        ></div>
        <section className={'flex w-screen'}>
          <img
            alt={'workit logo'}
            src={'/images/logo-light.svg'}
            width={96}
            height={24}
            className={'mx-4 my-6 flex-none'}
          />
          <div className={'grow'} />
          <a
            href={'#'}
            className={
              'flex-none text-base leading-8 text-white tracking-tight text-right font-bold my-6 mx-4 hover:text-eucalyptus underline underline-offset-8 decoration-[3px] decoration-eucalyptus'
            }
          >
            Apply for access
          </a>
        </section>
        <section className={'mt-8 w-screen text-center -mb-8'}>
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
              'bg-eucalyptus text-center font-bold mt-8 -mb-4 py-4 px-8 hover:bg-transparent border-2 hover:text-eucalyptus border-eucalyptus'
            }
          >
            Learn more
          </button>
          <img
            src={'/images/image-hero.webp'}
            alt={'phone with data app'}
            className={'mx-auto translate-y-24 max-w-xs '}
          />
        </section>
      </header>
      <main className={'relative'}>
        <div
          className={
            'absolute bg-eucalyptus rounded-b-hero left-[-40%] w-[180%] h-full -z-50'
          }
        ></div>
        <div className={'h-48'}></div>
        <div className={'flex flex-col items-center'}>
          <div
            className={
              'absolute rounded-full border border-1 w-16 h-16 mx-auto'
            }
          ></div>
          <div
            className={
              'pt-4 font-serif font-extrabold text-dark-purple text-3xl mx-auto'
            }
          >
            1
          </div>
          <div>
            <h2
              className={
                'font-serif font-extrabold text-dark-purple text-4xl text-center mt-6'
              }
            >
              Actionable insights
            </h2>
            <p className={'text-center text-davys-grey mx-4 mt-4'}>
              Optimize your products, improve customer satisfaction and stay
              ahead of the competition with our product data analytics.
            </p>
          </div>
        </div>
        <div className={'flex flex-col items-center mt-10'}>
          <div
            className={
              'absolute rounded-full border border-1 w-16 h-16 mx-auto'
            }
          ></div>
          <div
            className={
              'pt-4 font-serif font-extrabold text-dark-purple text-3xl mx-auto'
            }
          >
            2
          </div>
          <div>
            <h2
              className={
                'font-serif font-extrabold text-dark-purple text-4xl text-center mt-6'
              }
            >
              Data-driven decisions
            </h2>
            <p className={'text-center text-davys-grey mx-4 mt-4'}>
              Make data-driven decisions with our product data analytics. Our
              AI-generated reports help you unlock insights hidden in your
              product data.
            </p>
          </div>
        </div>
        <div className={'flex flex-col items-center mt-10'}>
          <div
            className={
              'absolute rounded-full border border-1 w-16 h-16 mx-auto'
            }
          ></div>
          <div
            className={
              'pt-4 font-serif font-extrabold text-dark-purple text-3xl mx-auto'
            }
          >
            3
          </div>
          <div>
            <h2
              className={
                'font-serif font-extrabold text-dark-purple text-4xl text-center mt-6'
              }
            >
              Always affordable
            </h2>
            <p className={'text-center text-davys-grey mx-4 mt-4 mb-20'}>
              Always affordable pricing that scales with your business. Get
              top-quality product data analytics services without hidden costs
              or unexpected fees.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Index;
