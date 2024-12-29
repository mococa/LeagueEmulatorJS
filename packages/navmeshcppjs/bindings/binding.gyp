{
  "targets": [
    {
      "target_name": "navmeshcppjs",
      "sources": [
        "../navmesh/source/cone_of_vision.cpp",
        "../navmesh/source/path_finder.cpp",
        "../navmesh/source/point.cpp",
        "../navmesh/source/polygon.cpp",
        "../navmesh/source/segment.cpp",
        "main.cpp"
      ],
      "include_dirs": [
		'../navmesh/source',
		"<!(node -p \"require('node-addon-api').include_dir\")"
      ],
      "cflags!": ["-fno-exceptions"],
      "cflags_cc!": ["-fno-exceptions"],
      "defines": ["NAPI_CPP_EXCEPTIONS"],
      "libraries": []
    }
  ]
}