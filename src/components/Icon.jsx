const Icon = ({ href, className, src, alt }) => {
    return (
      <a href={href} className={className} >
        <img src={src} alt={alt} />
      </a>
    );
  };

  export default Icon
