namespace scene {

    let canCameraScroll = 0
    let horizontalSpeed = 0
    let verticalSpeed = 0

    /**
    * Stops camera scroll.
    */
    //% block
    //% group="Camera"
    export function stopCameraScroll() {
        canCameraScroll = 0
    }

    /**
    * Starts a camera scroll.
    */
    //% block="scroll camera with vx $horizontally and vy $vertically"
    //% group="Camera"
    export function cameraScrollDiagonally(horizontally: number, vertically: number) {
        canCameraScroll = 1
        horizontalSpeed = horizontally
        verticalSpeed = vertically
    }

    game.onUpdateInterval(10, function () {
        if (scene.cameraProperty(CameraProperty.X) != 0 && scene.cameraProperty(CameraProperty.Y) != 0) {
            if (canCameraScroll == 1) {
                scene.centerCameraAt(scene.cameraProperty(CameraProperty.X) + horizontalSpeed, scene.cameraProperty(CameraProperty.Y) + verticalSpeed)
            }
        }
    })

}
