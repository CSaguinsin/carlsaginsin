function projects() {
    return (
      <section className="posts w-[40rem]">
        <ul className="space-y-4">
          <li className="flex flex-row space-x-4">
            <a href="https://survefy.website/" target="_blank" className="flex-none w-[10rem]">Survefy</a>
            <p className="flex-grow">Survefy helps you gather user feedback to shape products users love!</p>
            <time className="flex-none">2024/07/21</time>
          </li>
          <li className="flex flex-row space-x-4">
            <a href="https://recode.website/" target="_blank" className="flex-none w-[10rem]">ReCode</a>
            <p className="flex-grow">Platform designed for developers. By providing a centralized hub to compile, store, and reuse code snippets.</p>
            <time className="flex-none">2024/06/16</time>
          </li>
          <li className="flex flex-row space-x-4">
            <a href="https://buildmastershub.web.app/" target="_blank" className="flex-none w-[10rem]">BuildMastersHub</a>
            <p className="flex-grow">BuildMastersHub is a full stack web app project that aims to create a platform for construction workers and foreman</p>
            <time className="flex-none">2024/01/25</time>
          </li>
        </ul>
      </section>
    );
  }
  
  export default projects;
  