export const CartModal = () => {
  return (
    <div className="fixed inset-0 z-[1001] hidden items-stretch justify-end bg-black/80 box-border caret-transparent">
      <div
        role="dialog"
        className="flex w-full min-w-80 max-w-[480px] flex-col overflow-auto bg-white shadow-[rgba(0,0,0,0.25)_0px_5px_25px_0px] box-border caret-transparent"
      >
        {/* Header */}
        <div className="relative flex shrink-0 items-center justify-between border-b border-b-neutral-200 px-6 py-4 box-border caret-transparent">
          <h4 className="text-neutral-900 text-[26px] font-bold leading-[31.2px] font-urbanist md:text-[35px] md:leading-[42px] box-border caret-transparent">
            Your Cart
          </h4>

          <a
            role="button"
            aria-label="Close cart"
            className="flex h-[25px] w-[25px] items-center justify-center box-border caret-transparent"
          >
            <img
              src="https://c.animaapp.com/mjfry2ymwAc4IX/assets/icon-1.svg"
              alt="Close"
              className="h-4 w-4 box-border caret-transparent"
            />
          </a>
        </div>

        {/* Content */}
        <div className="flex grow basis-[0%] flex-col box-border caret-transparent">
          {/* Cart form (hidden) */}
          <form className="hidden grow basis-[0%] flex-col box-border caret-transparent">
            <div className="grow basis-[0%] overflow-auto px-6 py-3 box-border caret-transparent"></div>

            <div className="flex shrink-0 flex-col border-t border-t-neutral-200 px-6 pt-4 pb-6 box-border caret-transparent">
              <div className="mb-4 flex shrink-0 items-baseline justify-between box-border caret-transparent">
                <div>Subtotal</div>
                <div className="font-bold text-orange-500"></div>
              </div>

              <div className="box-border caret-transparent">
                <div className="hidden box-border caret-transparent">
                  <a
                    role="button"
                    aria-label="Apple Pay"
                    className="mb-2 flex h-[38px] min-h-[30px] items-center rounded-sm bg-black bg-center bg-no-repeat bg-size-[100%_50%] text-white box-border caret-transparent"
                  >
                    <div></div>
                  </a>

                  <a
                    role="button"
                    className="mb-2 hidden h-[38px] items-center justify-center rounded-sm bg-black px-[15px] text-white box-border caret-transparent"
                  >
                    <img
                      src="https://c.animaapp.com/mjfry2ymwAc4IX/assets/icon-2.svg"
                      alt=""
                      className="mr-2 h-4 w-4"
                    />
                    <img
                      src="https://c.animaapp.com/mjfry2ymwAc4IX/assets/icon-3.svg"
                      alt=""
                      className="mr-2 h-4 w-4"
                    />
                    <div>Pay with browser.</div>
                  </a>
                </div>

                {/* Checkout button */}
                <a
                  href="/checkout"
                  className="block rounded-sm border border-orange-500 bg-orange-500 px-[22px] py-4 text-center text-base font-semibold leading-4 text-neutral-900 font-urbanist hover:bg-blue-800 hover:border-blue-800 hover:text-white md:px-[27px] md:py-5 md:text-lg md:leading-[18px] box-border caret-transparent"
                >
                  Continue to Checkout
                </a>
              </div>
            </div>
          </form>

          {/* Empty cart */}
          <div className="flex grow basis-[0%] flex-col items-center justify-center gap-y-5 py-[100px] box-border caret-transparent">
            <div aria-label="This cart is empty">
              No items found.
            </div>

            <a
              href="/shop"
              className="block border border-orange-500 bg-orange-500 px-[22px] py-4 text-center text-base font-semibold leading-4 text-neutral-900 font-urbanist hover:bg-blue-800 hover:border-blue-800 hover:text-white md:px-[27px] md:py-5 md:text-lg md:leading-[18px] box-border caret-transparent"
            >
              Shop Now
            </a>
          </div>

          {/* Error message */}
          <div className="mx-6 mb-6 hidden shrink-0 bg-red-100 p-2.5 box-border caret-transparent">
            Product is not available in this quantity.
          </div>
        </div>
      </div>
    </div>
  );
};
