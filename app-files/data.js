var APP_DATA = {
  "scenes": [
    {
      "id": "0-cobblestone_street_night_8k",
      "name": "cobblestone_street_night_8k",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.336453941741766,
        "pitch": -0.009791547281395196,
        "fov": 1.5509878670074089
      },
      "linkHotspots": [
        {
          "yaw": -2.4295284611716035,
          "pitch": -0.09137381544721812,
          "rotation": 0,
          "target": "2-modern_buildings_night_4k"
        },
        {
          "yaw": 0.2772831734815355,
          "pitch": -0.010194683821485029,
          "rotation": 0,
          "target": "1-modern_bathroom_4k"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-modern_bathroom_4k",
      "name": "modern_bathroom_4k",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.5762357948754833,
        "pitch": 0.10708857912650238,
        "fov": 1.5509878670074089
      },
      "linkHotspots": [
        {
          "yaw": 2.1138312371256074,
          "pitch": 0.24910591504728608,
          "rotation": 0,
          "target": "0-cobblestone_street_night_8k"
        },
        {
          "yaw": 0.4764962600269964,
          "pitch": -0.13798616922543339,
          "rotation": 0,
          "target": "2-modern_buildings_night_4k"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-modern_buildings_night_4k",
      "name": "modern_buildings_night_4k",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.9467159347919454,
        "pitch": 0.02158437384883527,
        "fov": 1.5509878670074089
      },
      "linkHotspots": [
        {
          "yaw": 0.5844996247754111,
          "pitch": -0.02697498130405762,
          "rotation": 0,
          "target": "1-modern_bathroom_4k"
        },
        {
          "yaw": -1.6556719197671264,
          "pitch": -0.06336847901137865,
          "rotation": 0,
          "target": "0-cobblestone_street_night_8k"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "qtvr",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
