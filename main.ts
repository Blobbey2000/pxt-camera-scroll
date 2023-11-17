namespace scene {

    let canCameraScroll = 0
    let horizontalSpeed = 0
    let verticalSpeed = 0

    /**
     * Checks if camera is scrolling.
     */
    //% block="is camera scrolling"
    //% group="Camera"
    export function isCameraScrolling() {
        if (canCameraScroll == 1) {
            return true;
        } else {
            return false;
        }
    }

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
    //% block="scroll camera with x speed $horizontally and y speed $vertically"
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