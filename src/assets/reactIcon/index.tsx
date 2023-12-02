// modules
import React, { FC } from "react";
// types
import { SvgTypes } from "../../types/SvgType";

const ReactIcon: FC<SvgTypes> = (props) => {
  const { width, height, className, color } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 80 80"
    >
      <path
        fill={color}
        d="M46.5 40c0 3.593-2.907 6.5-6.5 6.5s-6.5-2.907-6.5-6.5 2.907-6.5 6.5-6.5 6.5 2.907 6.5 6.5z"
      ></path>
      <path
        fill={color}
        d="M40 47c-3.859 0-7-3.14-7-7s3.141-7 7-7 7 3.14 7 7-3.141 7-7 7zm0-13c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6z"
      ></path>
      <path
        fill={color}
        d="M24.474 75.503c-1.711 0-3.269-.392-4.632-1.164-2.28-1.293-3.856-3.521-4.686-6.62-.965-3.607-.85-8.398.332-13.878C5.956 50.562.5 45.531.5 40c0-5.532 5.455-10.562 14.987-13.84-1.182-5.481-1.298-10.272-.333-13.879.83-3.1 2.406-5.328 4.685-6.62 1.362-.772 2.921-1.164 4.632-1.164 4.388 0 9.891 2.73 15.531 7.698 5.64-4.963 11.141-7.691 15.524-7.691 1.711 0 3.269.392 4.632 1.164 2.277 1.291 3.854 3.515 4.684 6.611.966 3.606.85 8.398-.333 13.88C74.043 29.437 79.5 34.468 79.5 40s-5.457 10.563-14.991 13.842c1.182 5.481 1.298 10.272.332 13.878-.83 3.097-2.405 5.321-4.68 6.612-1.364.772-2.923 1.164-4.633 1.164-4.386 0-9.889-2.728-15.527-7.689-5.64 4.967-11.142 7.696-15.527 7.696zm-5.137-20.497c-.991 4.717-1.102 8.747-.316 11.679.542 2.026 1.481 3.431 2.794 4.175.753.427 1.648.644 2.659.644 3.394 0 7.862-2.282 12.621-6.437-2.385-2.402-4.713-5.121-6.928-8.091-3.831-.416-7.471-1.078-10.83-1.97zm23.569 10.059c4.758 4.151 9.227 6.431 12.621 6.432 1.011 0 1.906-.217 2.661-.644 1.309-.742 2.246-2.144 2.787-4.167.786-2.934.676-6.963-.315-11.679-3.362.892-7.003 1.554-10.833 1.97-2.214 2.97-4.539 5.688-6.921 8.088zm-7.34-7.672A69.158 69.158 0 0040 62.333a69.42 69.42 0 004.43-4.94A93.401 93.401 0 0140 57.5a93.6 93.6 0 01-4.434-.107zm-3.217-4.214A90.32 90.32 0 0040 53.5c2.585 0 5.155-.108 7.646-.32a88.988 88.988 0 004.214-6.495 86.718 86.718 0 003.547-6.686 86.61 86.61 0 00-3.546-6.684 88.83 88.83 0 00-4.215-6.495A90.446 90.446 0 0040 26.5c-2.588 0-5.159.108-7.647.321a86.61 86.61 0 00-7.765 13.181 86.991 86.991 0 007.761 13.177zm25.142-8.4a91.579 91.579 0 01-4.571 7.77 65.033 65.033 0 006.771-1.4 68.338 68.338 0 00-2.2-6.37zm-37.187 6.369a65.451 65.451 0 006.768 1.4 92.582 92.582 0 01-2.386-3.835 91.92 91.92 0 01-2.183-3.931 68.787 68.787 0 00-2.199 6.366zM59.816 40c1.528 3.391 2.773 6.743 3.708 9.977C70.926 47.373 75.5 43.574 75.5 40s-4.574-7.373-11.976-9.977c-.933 3.234-2.179 6.586-3.708 9.977zm-43.344-9.975C9.073 32.628 4.5 36.427 4.5 40c0 3.574 4.573 7.373 11.974 9.976.934-3.235 2.179-6.587 3.705-9.974-1.527-3.388-2.772-6.74-3.707-9.977zm3.831-1.173a69.255 69.255 0 002.2 6.368 91.131 91.131 0 014.572-7.768 64.901 64.901 0 00-6.772 1.4zm32.619-1.401a91.976 91.976 0 014.571 7.769 68.683 68.683 0 002.201-6.369 65.117 65.117 0 00-6.772-1.4zM24.471 8.497c-1.011 0-1.905.216-2.657.644-1.312.744-2.252 2.149-2.795 4.175-.785 2.935-.675 6.964.317 11.679 3.36-.892 7.002-1.555 10.834-1.971 2.217-2.971 4.545-5.688 6.927-8.088-4.76-4.157-9.231-6.439-12.626-6.439zm25.357 14.526c3.83.416 7.471 1.078 10.833 1.97.992-4.716 1.103-8.746.316-11.68-.542-2.022-1.48-3.424-2.79-4.166-.754-.427-1.649-.644-2.661-.644-3.393 0-7.86 2.281-12.619 6.433 2.38 2.399 4.706 5.117 6.921 8.087zM40 22.5c1.454 0 2.939.036 4.431.107a69.982 69.982 0 00-4.429-4.938 69.905 69.905 0 00-4.432 4.938A93.401 93.401 0 0140 22.5z"
      ></path>
      <path
        fill={color}
        d="M24.471 4.997c4.494 0 9.996 2.91 15.532 7.867 5.535-4.953 11.034-7.86 15.524-7.86 1.623 0 3.099.37 4.386 1.099 2.156 1.222 3.652 3.343 4.446 6.306 1.077 3.917.851 8.74-.434 14.08C73.147 29.57 79 34.431 79 40s-5.853 10.43-15.076 13.512c1.341 5.773 1.566 10.726.434 14.079-.794 2.962-2.289 5.084-4.443 6.306-1.289.73-2.46 1.103-4.082 1.103h-.417c-4.492 0-9.882-2.91-15.416-7.861-5.535 4.956-11.035 7.864-15.527 7.864-1.623 0-3.099-.37-4.386-1.099-2.158-1.225-3.655-3.349-4.448-6.314-1.19-3.717-.95-8.603.434-14.079C6.852 50.429 1 45.569 1 40c0-5.568 5.852-10.429 15.072-13.511-.687-3.059-1.126-5.899-1.141-8.489a21.247 21.247 0 01.707-5.59c.794-2.966 2.29-5.09 4.448-6.314 1.286-.73 2.762-1.099 4.385-1.099m-5.513 20.617c3.477-.955 7.338-1.677 11.483-2.117 2.382-3.21 4.875-6.096 7.386-8.584-4.872-4.346-9.616-6.917-13.356-6.917-1.099 0-2.075.238-2.904.709-1.433.813-2.452 2.32-3.031 4.481-.858 3.202-.663 7.53.422 12.428m42.081-.001c1.085-4.898 1.28-9.227.422-12.429-.578-2.157-1.597-3.661-3.027-4.472-.83-.471-1.809-.709-2.907-.709-3.737 0-8.478 2.568-13.349 6.91 2.51 2.488 5 5.374 7.38 8.583 4.143.44 8.004 1.162 11.481 2.117m-26.562-2.447c1.802-.107 3.609-.2 5.488-.2 1.879 0 3.755.094 5.557.2a70.437 70.437 0 00-5.521-6.204 70.776 70.776 0 00-5.524 6.204M40 54c2.761 0 5.404-.121 7.918-.342a88.394 88.394 0 004.372-6.719A86.927 86.927 0 0055.96 40a87.031 87.031 0 00-3.669-6.937 88.203 88.203 0 00-4.373-6.719C45.405 26.121 42.762 26 40 26s-5.406.121-7.92.343a87.238 87.238 0 00-8.045 13.658 87.016 87.016 0 003.668 6.937 88.409 88.409 0 004.374 6.719c2.515.222 5.16.343 7.923.343m17.546-17.587c1.125-2.709 2.056-5.369 2.766-7.913-2.553-.702-5.373-1.282-8.428-1.707a91.97 91.97 0 015.662 9.62m-35.097.001a92.563 92.563 0 012.668-4.873 91.97 91.97 0 012.995-4.747c-3.055.424-5.875 1.005-8.428 1.707.71 2.544 1.641 5.203 2.765 7.913m40.739 14.208C71.264 47.886 76 43.866 76 40s-4.736-7.886-12.812-10.622c-.953 3.405-2.269 6.983-3.92 10.621 1.651 3.639 2.967 7.217 3.92 10.623m-46.378-.001c.952-3.404 2.267-6.982 3.918-10.619-1.651-3.638-2.967-7.217-3.919-10.622C8.734 32.116 4 36.135 4 40c0 3.866 4.735 7.885 12.81 10.621m35.074 2.586c3.055-.424 5.875-1.004 8.428-1.707-.711-2.544-1.642-5.204-2.766-7.914a91.97 91.97 0 01-5.662 9.621m-23.775-.001a93.04 93.04 0 01-2.993-4.746 92.464 92.464 0 01-2.667-4.87c-1.124 2.708-2.054 5.367-2.764 7.91 2.552.701 5.371 1.281 8.424 1.706m-3.635 18.797c3.739 0 8.481-2.57 13.352-6.914-2.513-2.489-5.005-5.376-7.388-8.587-4.143-.439-8.002-1.161-11.478-2.116-1.084 4.898-1.279 9.226-.422 12.428.578 2.16 1.598 3.667 3.03 4.48.828.471 1.807.709 2.906.709m31.053-.006c1.099 0 2.076-.238 2.907-.709 1.43-.811 2.447-2.315 3.024-4.473.858-3.203.663-7.531-.421-12.428-3.477.955-7.337 1.677-11.481 2.116-2.38 3.21-4.871 6.096-7.381 8.585 4.871 4.34 9.613 6.908 13.352 6.909M40 63.04a70.783 70.783 0 005.522-6.206c-1.801.107-3.559.333-5.439.333-1.881 0-3.807-.226-5.609-.333A70.517 70.517 0 0040 63.04M24.116 4.072c-1.799 0-3.085.338-4.523 1.153-2.399 1.361-4.055 3.691-4.921 6.926-.96 3.587-.877 8.302.236 13.681C5.419 29.189 0 34.325 0 40c0 5.676 5.42 10.811 14.909 14.168-1.113 5.379-1.196 10.094-.235 13.681.865 3.233 2.52 5.563 4.921 6.926 1.44.816 3.17 1.163 4.968 1.163 4.487 0 9.753-2.535 15.438-7.466 5.684 4.926 11.039 7.524 15.525 7.525 1.799 0 3.441-.413 4.881-1.229 2.397-1.359 4.051-3.686 4.916-6.917.961-3.588.878-8.303-.235-13.681C74.579 50.812 80 45.676 80 40s-5.42-10.812-14.911-14.169c1.114-5.38 1.196-10.095.235-13.682-.866-3.231-2.521-5.558-4.919-6.917-1.439-.815-3.081-1.229-4.879-1.229-4.485 0-9.839 2.599-15.524 7.527-5.686-4.932-11.066-7.461-15.554-7.461l-.332.003zM19.72 24.377c-.462-2.324-.772-4.502-.789-6.412-.015-1.72.221-3.217.57-4.521.507-1.892 1.368-3.194 2.559-3.87a4.895 4.895 0 012.423-.644c3.181 0 7.367 2.178 11.883 6.034-2.221 2.273-4.392 4.819-6.466 7.585-3.585.4-7.003 1.013-10.18 1.828zm23.918-9.411c4.515-3.853 8.711-5.963 11.888-5.963.924 0 1.737.195 2.414.579 1.189.674 2.049 1.973 2.555 3.861.874 2.818.761 6.564-.218 10.933-3.177-.814-6.594-1.428-10.178-1.826-2.073-2.765-4.242-5.311-6.461-7.584zm-6.965 7.094a68.902 68.902 0 013.328-3.678 68.455 68.455 0 013.326 3.678 93.3 93.3 0 00-6.654 0zm-4.048 5.24c2.405-.199 4.883-.341 7.375-.341 2.491 0 4.969.142 7.373.341a87.795 87.795 0 014.056 6.269 86.348 86.348 0 013.423 6.43 86.576 86.576 0 01-7.48 12.701c-2.403.199-4.881.466-7.372.466-2.493 0-4.972-.268-7.378-.467a87.371 87.371 0 01-4.058-6.269A85.944 85.944 0 0125.142 40a86.194 86.194 0 017.483-12.7zm24.797 6.724a92.547 92.547 0 00-3.468-5.899c1.774.302 3.485.663 5.114 1.08a67.473 67.473 0 01-1.646 4.819zm-36.494-4.819a63.923 63.923 0 015.114-1.08 91.83 91.83 0 00-1.786 2.908 94.03 94.03 0 00-1.683 2.99 66.926 66.926 0 01-1.645-4.818zm39.437 10.794c1.415-3.162 2.587-6.292 3.49-9.326C70.758 33.192 75 36.721 75 40s-4.242 6.808-11.145 9.327c-.904-3.035-2.075-6.166-3.49-9.328zm-44.223 9.327C9.241 46.807 5 43.278 5 40s4.241-6.807 11.141-9.326c.903 3.035 2.074 6.165 3.489 9.327-1.414 3.161-2.585 6.291-3.488 9.325zm37.811 2.55a92.174 92.174 0 003.469-5.9 67.845 67.845 0 011.646 4.821 64.94 64.94 0 01-5.115 1.079zm-33.024-1.081a67.527 67.527 0 011.644-4.816 91.986 91.986 0 003.467 5.896 64.733 64.733 0 01-5.111-1.08zm3.545 20.208c-.924 0-1.736-.195-2.413-.579-1.19-.676-2.051-1.977-2.557-3.869-.831-2.845-.737-6.592.218-10.933 3.176.814 6.592 1.428 10.175 1.826 2.075 2.766 4.246 5.313 6.468 7.588-4.515 3.857-8.712 5.968-11.891 5.967zM50.098 57.45c3.584-.399 7.001-1.012 10.178-1.826 1.105 4.74 1.192 8.518.217 10.932-.505 1.889-1.364 3.188-2.552 3.861-.678.384-1.49.579-2.413.579v1l-.001-1c-3.18 0-7.377-2.11-11.891-5.961 2.22-2.273 4.389-4.819 6.462-7.585zM40 61.62a68.17 68.17 0 01-3.33-3.68 93.467 93.467 0 006.657 0A68.14 68.14 0 0140 61.62z"
      ></path>
    </svg>
  );
};

export default ReactIcon;

ReactIcon.defaultProps = {
  width: 64,
  height: 64,
  color: "#8bb7f0",
};
