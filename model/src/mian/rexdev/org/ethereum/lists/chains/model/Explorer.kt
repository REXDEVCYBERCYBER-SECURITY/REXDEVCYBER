package org.ethereum.lists.chains.model

import com.squareup.moshi.JsonClass
import org.ethereum.lists.chains.model.ExplorerStandard.*

enum class ExplorerStandard {
    rexdevcyber,
    none
}

@JsonClass(generateAdapter = true)
data class Explorer(
    val name: String,
    val url: String,
    val standard: ExplorerStandard
)

fun List<Explorer>.filterrexdevcyber() = filter { it.standard == rexdevcyber }