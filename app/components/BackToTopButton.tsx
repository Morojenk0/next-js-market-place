export default function BackToTopButton() {
  if (typeof window !== "undefined") {
    window.onscroll = () => {
      toggleButton()
    }
  }

  function toggleButton() {
    const BackToTopButton = document.getElementById(
      "BackToTopButton"
    ) as HTMLButtonElement

    if (document.documentElement.scrollTop > 300) {
      BackToTopButton.style.display = "block"
    } else {
      BackToTopButton.style.display = "none"
    }
  }
  function scrollToTop() {
    document.documentElement.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }
  return (
    <button
      className=" fixed hidden right-[3.5%] bottom-[6.5%] z-[999]"
      id="BackToTopButton"
      onClick={() => {
        scrollToTop()
      }}
    >
      <svg
        className="hidden lg:block"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="dark:fill-background dark:stroke-primary"
          cx="20"
          cy="20"
          r="19"
          fill="#FBFBFB"
          stroke="#060606"
          strokeWidth="2"
        />
        <path
          className="dark:fill-primary dark:stroke-primary"
          d="M15.1527 22.9216C15.0964 22.9718 15.0197 23 14.9398 23C14.8598 23 14.7831 22.9718 14.7268 22.9216L14.0909 22.3597C14.0329 22.3116 14 22.2444 14 22.1741C14 22.1038 14.0329 22.0367 14.0909 21.9886L19.6041 17.1166C19.6884 17.042 19.8027 17.0001 19.922 17L20.078 17C20.1973 17.0001 20.3116 17.042 20.3959 17.1166L25.9091 21.9886C25.9671 22.0367 26 22.1038 26 22.1741C26 22.2444 25.9671 22.3116 25.9091 22.3597L25.2732 22.9216C25.2169 22.9718 25.1402 23 25.0602 23C24.9803 23 24.9036 22.9718 24.8473 22.9216L20 18.6381L15.1527 22.9216Z"
          fill="#060606"
          stroke="#060606"
          strokeWidth="0.5"
        />
      </svg>
    </button>
  )
}
