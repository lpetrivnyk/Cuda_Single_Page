/**
 * Copyright 2017 by Petrivnyk
 * https://www.facebook.com/profile.php?id=100005683967607
 * https://vk.com/lubomyr_petrivnyk
 * l.petrivnyk@gmail.com */

// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

//First circle Progressbar
var bar_first = new ProgressBar.Circle(circle_first, {
    color: '#3c4761',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 7,
    trailWidth: 7,
    easing: 'bounce',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: { color: '#30bae7', width: 7 },
    to: { color: '#30bae7', width: 7 },
    // Set default step function for all animate calls
    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100) + '<span class="rate"> % </span>';
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value);
        }

    }
});
bar_first.text.style.fontFamily = '"TitilliumWebLight", Helvetica, sans-serif';
bar_first.text.style.fontSize = '50px';

bar_first.animate(0.9);  // Number from 0.0 to 1.0


//Second circle Progressbar
var bar_second = new ProgressBar.Circle(circle_second, {
    color: '#3c4761',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 7,
    trailWidth: 7,
    easing: 'bounce',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: { color: '#d74680', width: 7 },
    to: { color: '#d74680', width: 7 },
    // Set default step function for all animate calls
    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100) + '<span class="rate"> % </span>';
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value);
        }

    }
});
bar_second.text.style.fontFamily = '"TitilliumWebLight", Helvetica, sans-serif';
bar_second.text.style.fontSize = '50px';

bar_second.animate(0.75);  // Number from 0.0 to 1.0

//Third circle Progressbar
var bar_third = new ProgressBar.Circle(circle_third, {
    color: '#3c4761',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 7,
    trailWidth: 7,
    easing: 'bounce',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: { color: '#15c7a8', width: 7 },
    to: { color: '#15c7a8', width: 7 },
    // Set default step function for all animate calls
    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100) + '<span class="rate"> % </span>';
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value);
        }

    }
});
bar_third.text.style.fontFamily = '"TitilliumWebLight", Helvetica, sans-serif';
bar_third.text.style.fontSize = '50px';

bar_third.animate(0.7);  // Number from 0.0 to 1.0

//Fourth circle Progressbar
var bar_fourth = new ProgressBar.Circle(circle_fourth, {
    color: '#3c4761',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 7,
    trailWidth: 7,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: { color: '#eb7d4b', width: 7 },
    to: { color: '#eb7d4b', width: 7 },
    // Set default step function for all animate calls
    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100) + '<span class="rate"> % </span>';
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value);
        }

    }
});
bar_fourth.text.style.fontFamily = '"TitilliumWebLight", Helvetica, sans-serif';
bar_fourth.text.style.fontSize = '50px';

bar_fourth.animate(0.85);  // Number from 0.0 to 1.0

