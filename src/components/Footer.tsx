export function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-center text-white-900 py-5">
      <p className="w-full  text-center text-lg font-display">PokeNext</p>
      <p>
        Copyright{" "}
        <a
          href="https://www.youtube.com/@MatheusBattisti"
          target="_blank"
          className="text-sm text-cyan-500 mx-1"
        >
          Matheus Battisti
        </a>
        &
        <a
          href="https://github.com/ManoelPatrocinio/"
          target="_blank"
          className="text-sm text-cyan-500 mx-1"
        >
          Manoel Patrocinio
        </a>
      </p>
    </footer>
  );
}
